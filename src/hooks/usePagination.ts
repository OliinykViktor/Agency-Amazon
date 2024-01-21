import { useState } from 'react';

interface UsePaginationProps<T> {
  arr: T[];
}

const usePagination = <T>({ arr }: UsePaginationProps<T>) => {
  const profilesPerPage = 5;
  const [currentPage, setCurrentPage] = useState<number>(0);

  const offset = currentPage * profilesPerPage;
  const pageCount = Math.ceil(arr.length / profilesPerPage);
  const currentData = arr.slice(offset, offset + profilesPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return {
    pageCount,
    currentData,
    handlePageClick,
  };
};

export default usePagination;
