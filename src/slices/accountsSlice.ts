import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { 
  Dispatch, 
  PayloadAction, 
  createSlice 
} from '@reduxjs/toolkit';

import { RootState } from '../store';
import { 
  IAccountsData, 
  IInitialState 
} from '../types/types';
import { 
  setError, 
  setLoading, 
  setSuccess 
} from '../reducers';

const accountSlice = createSlice({
  name: 'accounts',
  initialState: {
    loading: false,
    data: [] as IAccountsData[],
    error: false,
  } as IInitialState<IAccountsData>,
  reducers: {
    getAccountsLoading: setLoading,
    getAccountsSuccess: setSuccess<IAccountsData>,
    getAccountsError: setError,
  },
});

export const { 
  getAccountsLoading, 
  getAccountsError, 
  getAccountsSuccess 
} =accountSlice.actions;

export const getAccounts =
  (): ThunkAction<
    Promise<void>,
    RootState,
    unknown,
    PayloadAction<IAccountsData[]>
  > =>
  async (dispatch: Dispatch) => {
    dispatch(getAccountsLoading());

    try {
      const res = await axios.get<IAccountsData[]>(
        '../../mock/accounts_data.json'
      );
      const data = res.data;

      dispatch(getAccountsSuccess(data));
    } catch (error) {
      dispatch(getAccountsError());
    }
  };

export default accountSlice.reducer;
