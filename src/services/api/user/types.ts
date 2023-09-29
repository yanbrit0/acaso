export type UserProfileType = {
  id: string;
  updated_at?: string;
  profile_picture?: string;
  family: {
    first_name: {
      name: string;
    };
    last_name: {
      name: string;
    };
  };
};
