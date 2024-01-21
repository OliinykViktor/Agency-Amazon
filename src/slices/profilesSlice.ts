import { ThunkAction } from 'redux-thunk';
import { 
  Dispatch, 
  PayloadAction, 
  createSlice 
} from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../store';
import { 
  setError, 
  setLoading, 
  setSuccess 
} from '../reducers';
import { 
  IProfilesData, 
  IInitialState 
} from '../types/types';

const profilesSlice = createSlice({
  name: 'profiles',
  initialState: {
    loading: false,
    data: [] as IProfilesData[],
    error: false,
  } as IInitialState<IProfilesData>,
  reducers: {
    getProfilesLoading: setLoading,
    getProfilesSuccess: setSuccess<IProfilesData>,
    getProfilesError: setError,
  },
});

export const {
  getProfilesLoading,
  getProfilesError,
  getProfilesSuccess
} = profilesSlice.actions;

export const getProfiles = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  PayloadAction<IProfilesData[]>> => async (dispatch: Dispatch) => {dispatch(getProfilesLoading());

  try {
    const res = await axios.get<IProfilesData[]>('../../mock/profiles_data.json');
    const data = res.data;

    dispatch(getProfilesSuccess(data));
  } catch (error) {
    dispatch(getProfilesError());
  }
};

export default profilesSlice.reducer;  