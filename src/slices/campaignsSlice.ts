import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { 
  Dispatch, 
  PayloadAction, 
  createSlice 
} from '@reduxjs/toolkit';

import { RootState } from '../store';
import { 
  setError, 
  setLoading, 
  setSuccess 
} from '../reducers';
import { 
  ICampaignsData, 
  IInitialState 
} from '../types/types';

const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState: {
    loading: false,
    data: [] as ICampaignsData[],
    error: false,
  } as IInitialState<ICampaignsData>,
  reducers: {
    getCampaignsLoading: setLoading,
    getCampaignsSuccess: setSuccess<ICampaignsData>,
    getCampaignsError: setError,
  },
});

export const {
  getCampaignsLoading,
  getCampaignsError,
  getCampaignsSuccess
} = campaignsSlice.actions;

export const getCampaigns = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  PayloadAction<ICampaignsData[]>> => async (dispatch: Dispatch) => {dispatch(getCampaignsLoading());

  try {
    const res = await axios.get<ICampaignsData[]>('../../mock/campaings_data.json');
    const data = res.data;

    dispatch(getCampaignsSuccess(data));
  } catch (error) {
    dispatch(getCampaignsError());
  }
};

export default campaignsSlice.reducer;  