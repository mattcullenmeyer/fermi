import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { RequestStatus } from '../requestStatusTypes';
import { RequestTypes } from '../../services/useAxios';
import { authAxios } from '../../services/authAxios';
import { userLogout, LogoutData } from '../../services/userLogout';

enum Errors {
  FetchErrorMessage = 'Failed to fetch user data.',
  LogoutErrorMessage = 'Failed to log out user.',
}

export type ThemeMode = 'light' | 'dark';

export interface User {
  id: number;
  username: string;
  email: string;
  email_verified: boolean;
  first_name: string;
  last_name: string;
}

// https://redux-toolkit.js.org/usage/usage-with-typescript
export const fetchUser = createAsyncThunk<
  User,
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('user/fetchUser', async () => {
  const response = await authAxios<User>({
    path: 'user/detail',
    method: RequestTypes.Get,
  });

  if (response.status === 200 && response.data) {
    return response.data;
  }

  throw new Error(response.error || Errors.FetchErrorMessage);
});

export const resetUser = createAction('resetUser');

interface UserState {
  status: RequestStatus;
  data: {};
  error: null | string;
}

const initialState: UserState = {
  status: RequestStatus.Idle,
  data: {},
  error: null,
};

export const userSlice = createSlice<UserState, any>({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.status = RequestStatus.Pending;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = RequestStatus.Success;
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = RequestStatus.Failure;
      state.error = action.error.message || Errors.FetchErrorMessage;
    });
    builder.addCase(resetUser, () => {
      return { ...initialState };
    });
  },
});
