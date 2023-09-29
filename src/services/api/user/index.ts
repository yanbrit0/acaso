import { api } from '..';

import { UserProfileType } from './types';

export const getUserProfile = async () => {
  const { data } = await api.get<UserProfileType>('/user/profile');

  return data;
};
