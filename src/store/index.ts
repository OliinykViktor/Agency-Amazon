import { configureStore } from '@reduxjs/toolkit';

import accounts from '../slices/accountsSlice';
import campaigns from '../slices/campaignsSlice';
import profiles from '../slices/profilesSlice';

const store = configureStore({
  reducer: {
    accounts,
    campaigns,
    profiles,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
