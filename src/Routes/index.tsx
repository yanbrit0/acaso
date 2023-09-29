import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStackRoutes } from './auth.routes';

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthStackRoutes />
    </NavigationContainer>
  );
};
