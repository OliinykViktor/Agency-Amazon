import { PayloadAction } from '@reduxjs/toolkit';

import { IInitialState } from '../types/types';

export const setLoading = <T>(state: IInitialState<T>): void => {
  state.loading = true;
  state.error = false;
};

export const setSuccess = <T>(state: IInitialState<T>, action: PayloadAction<T[]>): void => {
  state.loading = false;
  state.data = action.payload;
  state.error = false;
};

export const setError = <T>(state: IInitialState<T>): void => {
  state.loading = false;
  state.data = [];
  state.error = true;
};
