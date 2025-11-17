"use client";

import { useState, useEffect } from "react";
import { PropertyListing } from "@/data/property-listing";

import useDebounce from "./useDebounce";
import useFilteredProperties from "./useFilteredProperties";
import usePagination from "./usePagination";
import useURLFilters, { FiltersType } from "./useURLFilters";

export default function usePropertyFilters() {
  const { read, write } = useURLFilters();

  // 1. Regular filters (instant UI)
  const [filters, setFilters] = useState(read());

  // 2. Debounced filters (used for filtering + URL)
  const debouncedFilters = useDebounce(filters);

  // 3. Filter the properties
  const filteredList = useFilteredProperties(
    PropertyListing.projects,
    debouncedFilters
  );

  // 4. Pagination (separate hook)
  const {
    paginated,
    pageNum,
    setPageNum,
    rowCount,
    setRowCount,
    totalCount,
    totalPages,
  } = usePagination(filteredList);

  // 5. Sync URL
  useEffect(() => {
    write(debouncedFilters, pageNum, rowCount);
  }, [debouncedFilters, pageNum, rowCount, write]);

  // Update filters
  const updateFilter = <K extends keyof FiltersType>(field: K, value: FiltersType[K]) => {
    setFilters(prev => ({ ...prev, [field]: value }) as FiltersType);
    setPageNum(1); // Reset page when filters change
  };

  const resetFilters = () => {
    setFilters({ budget: [], type: [], minArea: "" });
    setPageNum(1);
  };

  return {
    filters,
    debouncedFilters,
    updateFilter,
    resetFilters,
    showDataList: paginated,
    totalCount,
    totalPages,
    pageNum,
    setPageNum,
    rowCount,
    setRowCount,
  };
}
