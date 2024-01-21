import { useState, useMemo } from 'react';

interface UseFilterAndSortProps<T> {
  data: T[];
}

const useFilterAndSort = <T>(
  { data }: UseFilterAndSortProps<T>,
  filterField: keyof T
) => {
  const [filterValue, setFilterValue] = useState<string>('');
  const [sortField, setSortField] = useState<keyof T>();
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredData = useMemo(() => {
    if (filterValue) {
      return data.filter((item) =>
        String(item[filterField])
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      );
    }
    return data;
  }, [data, filterField, filterValue]);

  const sortedData = useMemo(() => {
    if (sortField) {
      return [...filteredData].sort((a, b) => {
        const aValue = String(a[sortField]);
        const bValue = String(b[sortField]);
        if (sortOrder === 'asc') {
          return aValue.localeCompare(bValue, undefined, { numeric: true });
        } else {
          return bValue.localeCompare(aValue, undefined, { numeric: true });
        }
      });
    }
    return filteredData;
  }, [filteredData, sortField, sortOrder]);

  const handleSort = (field: keyof T) => {
    const newSortOrder =
      sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(newSortOrder);
  };

  return {
    filterValue,
    setFilterValue,
    sortedData,
    handleSort,
    sortField,
    sortOrder,
  };
};

export default useFilterAndSort;
