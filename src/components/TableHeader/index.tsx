import React from 'react';

interface TableHeaderProps<T> {
  title: keyof T;
  sortField: keyof T | undefined;
  handleSort: (field: keyof T) => void;
  sortOrder: string;
}

const TableHeader = <T,>({
  title,
  handleSort,
  sortField,
  sortOrder
}: TableHeaderProps<T>) => (
  <th
    tabIndex={0}
    scope='col'
    className={` ${title === sortField ? '' : 'text-secondary'} cursor-pointer ${title === sortField ? 'bg-secondary' : ''}`}
    onClick={() => handleSort(title)}>
      {String(title)}
    {sortField === title && (
      <span>{sortOrder === 'asc' ? ' ▲' : ' ▼'}</span>
    )}
  </th>
);

export default TableHeader;
