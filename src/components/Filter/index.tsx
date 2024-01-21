import React, { FC } from 'react';

interface IFilter {
  placeholder: string;
  value: string | number;
  onInputChange: (value: string) => void
}

const Filter: FC<IFilter> = ({
  placeholder,
  value,
  onInputChange
}) => (
  <div className='mb-3'>
    <input
      type='text'
      id='filterInput'
      className='form-control'
      placeholder={placeholder}
      value={value}
      onChange={(e) => onInputChange(e.target.value)}
    />
  </div>
);

export default Filter;