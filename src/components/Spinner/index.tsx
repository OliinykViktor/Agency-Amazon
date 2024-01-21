import React from 'react';
import { ClipLoader } from 'react-spinners';

interface ISpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<ISpinnerProps> = ({ loading }) => (
  <ClipLoader
    color='white'
    loading={loading}
    size={150}
    aria-label='Loading Spinner'
    data-testid='loader'
  />
);

export default Spinner;