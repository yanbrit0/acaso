export type CredentialsType = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: {
    access_token: string;
    id_token: string;
    refresh_token: string;
  };
  user: {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    onboard_complete: boolean;
    groups: string[];
  };
};
