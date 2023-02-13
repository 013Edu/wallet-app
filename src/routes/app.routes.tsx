import React from 'react';

import { View } from 'react-native';

import { createNativeStackNavigator } from  "@react-navigation/native-stack"

import TabRoutes from './tab.routes';

const AppRoutes: React.FC = () => {

  const  { Navigator, Screen } = createNativeStackNavigator()

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
      </Navigator>
  )
}

export default AppRoutes;