import { useMemo, useState } from "react";

export default function usePagination<T>(items: T[], initialPage = 1, initialRows = 10) {
  const [pageNum, setPageNum] = useState(initialPage);
  const [rowCount, setRowCount] = useState(initialRows);

  const totalCount = items.length;
  const totalPages = Math.ceil(totalCount / rowCount);

  const paginated = useMemo(() => {
    const start = (pageNum - 1) * rowCount;
    return items.slice(start, start + rowCount);
  }, [items, pageNum, rowCount]);

  return {
    pageNum,
    setPageNum,
    rowCount,
    setRowCount,
    totalPages,
    totalCount,
    paginated,
  };
}
