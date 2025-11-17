import { useMemo } from "react";
import { projectListing } from "@/types/types";
import { FiltersType } from "./useURLFilters";

export default function useFilteredProperties(
  properties: projectListing[],
  filters: FiltersType
) {
  const filtered = useMemo(() => {
    return properties.filter(property => {
      const { budget, type, minArea } = filters;

      // Budget
      if (budget.length === 2) {
        const [minB, maxB] = budget;
        if (property.minPrice < minB || property.maxPrice > maxB) return false;
      }

      // Type
      if (type.length) {
        const hasType = type.some(t =>
          property.typologies.some(pt =>
            pt.toLowerCase().includes(t.toLowerCase())
          )
        );
        if (!hasType) return false;
      }

      // Min area
      if (minArea) {
        const minA = Number(minArea);
        const matchesArea =
          property.minSaleableArea >= minA ||
          property.maxSaleableArea >= minA;
        if (!matchesArea) return false;
      }

      return true;
    });
  }, [filters, properties]);

  return filtered;
}
