import { api } from '..';

import { CredentialsType, LoginResponse } from './types';

export const loginWithCredentials = async (credentials: CredentialsType) => {
  const { data } = await api.post<LoginResponse>('/auth/v2/login', credentials);

  return data;
};
