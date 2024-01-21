export interface IAccountsData {
  accountId: string;
  email: string;
  authToken: string;
  creationDate: string;
}

export interface ICampaignsData {
  campaignId: string;
  clicks: number;
  cost: number;
  date: string;
}

export interface IProfilesData {
  profileId: string;
  country: string;
  marketplace: string;
}

export interface IInitialState<T> {
  loading: boolean;
  data: T[];
  error: boolean;
}