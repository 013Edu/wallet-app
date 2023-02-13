import React from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { NavigationContainer } from '@react-navigation/native';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
        <AppRoutes />
    </NavigationContainer>
  )
}

export default Routes;