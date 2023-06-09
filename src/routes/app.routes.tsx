import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack"

import TabRoutes from './tab.routes';
import Profile from '../screens/Profile';

const AppRoutes: React.FC = () => {

  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name='TabRoutes'
        component={TabRoutes}
      />
      <Screen
        name='Profile'
        component={Profile}
      />
    </Navigator>
  )
}

export default AppRoutes;