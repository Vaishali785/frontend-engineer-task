"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export type FiltersType = {
  budget: number[];
  type: string[];
  minArea: string;
};

export default function useURLFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const read = useCallback((): FiltersType => {
    const budget = searchParams.get("budget")
      ? searchParams.get("budget")!.split("-").map(Number)
      : [];

    const type = searchParams.get("type")
      ? searchParams.get("type")!.split(",")
      : [];

    return {
      budget,
      type,
      minArea: searchParams.get("minArea") || "",
    };
  }, [searchParams]);

  const write = useCallback(
    (filters: FiltersType, pageNum: number, rowCount: number) => {
      const params = new URLSearchParams();

      if (filters.budget.length === 2)
        params.set("budget", filters.budget.join("-"));

      if (filters.type.length)
        params.set("type", filters.type.join(","));

      if (filters.minArea.trim())
        params.set("minArea", filters.minArea);

      params.set("currentPage", String(pageNum));
      params.set("rowCount", String(rowCount));

      router.push(`?${params.toString()}`);
    },
    [router]
  );

  return { read, write };
}
