import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

import { CredentialsType } from '../../services/api/login/types';
import { loginWithCredentials } from '../../services/api/login';
import { api } from '../../services/api';
import { getUserProfile } from '../../services/api/user';

type AuthProviderProps = {
  children: ReactNode;
};

type UserProps = {
  id: string;
  firstName: string;
  lastName: string;
  picture?: string;
};

type AuthContextData = {
  user: UserProps;
  signIn: (credentials: CredentialsType) => Promise<void>;
};

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  const contextValue = useMemo(() => {
    const signIn = async (credentials: CredentialsType) => {
      const { token } = await loginWithCredentials(credentials);

      api.defaults.headers.common.Authorization = `Bearer ${token.id_token}`;

      const response = await getUserProfile();

      setUser({
        id: response.id,
        firstName: response.family.first_name.name,
        lastName: response.family?.last_name.name,
        picture: response.profile_picture,
      });
    };

    return { user, signIn };
  }, [user]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
