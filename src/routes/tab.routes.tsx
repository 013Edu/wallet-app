import React from 'react';
import { View } from 'react-native';

import Carteira from '../screens/Tab/Carteira';
import Relatorio from '../screens/Tab/Relatorio';
import Notificacaos from '../screens/Tab/Notificacaos';
import Settings from '../screens/Tab/Settings';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useTheme } from 'styled-components';

import { Ionicons } from "@expo/vector-icons"

const TabRoutes: React.FC = () => {

  const { Navigator, Screen } = createBottomTabNavigator()

  const theme =  useTheme()

  return (
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: theme.COLORS.GRAY4,
          tabBarActiveTintColor: theme.COLORS.GRAY1,
          tabBarStyle : {
            paddingBottom: 7,
            backgroundColor: theme.COLORS.GRAY6
          }
        }}
      >
        <Screen 
        name='Carteira' 
        component={Carteira}
        options={{
          tabBarIcon: ({focused}) => (
           <View>
            {focused ? (
               <Ionicons 
               name='card'
               size={28}
               color={focused ? theme.COLORS.GRAY2 : theme.COLORS.GRAY5}
             />
            ) : (
              <Ionicons 
              name='card-outline'
              size={28}
              color={focused ? theme.COLORS.GRAY2 : theme.COLORS.GRAY3}
            />
            )}
           </View>
          )
        }}
        />
        
        <Screen 
        name='Relatorio' 
        component={Relatorio}
         options={{
          tabBarIcon: ({focused}) => (
           <View>
            {focused ? (
               <Ionicons 
               name='bookmarks'
               size={28}
               color={focused ? theme.COLORS.GRAY2 : theme.COLORS.GRAY5}
             />
            ) : (
              <Ionicons 
              name='bookmarks-outline'
              size={28}
              color={focused ? theme.COLORS.GRAY2 : theme.COLORS.GRAY3}
            />
            )}
           </View>
          )
        }}
        />
        
        <Screen 
        name='Notificacaos' 
        component={Notificacaos}
         options={{
          tabBarIcon: ({focused}) => (
           <View>
            {focused ? (
               <Ionicons 
               name='notifications'
               size={28}
               color={focused ? theme.COLORS.GRAY2 : theme.COLORS.GRAY5}
             />
            ) : (
              <Ionicons 
              name='notifications-outline'
              size={28}
              color={focused ? theme.COLORS.GRAY2 : theme.COLORS.GRAY3}
            />
            )}
           </View>
          )
        }}
        />
        
        <Screen 
        name='Settings' 
        component={Settings}
         options={{
          tabBarIcon: ({focused}) => (
           <View>
            {focused ? (
               <Ionicons 
               name='aperture'
               size={28}
               color={focused ? theme.COLORS.GRAY2 : theme.COLORS.GRAY5}
             />
            ) : (
              <Ionicons 
              name='aperture-outline'
              size={28}
              color={focused ? theme.COLORS.GRAY2 : theme.COLORS.GRAY3}
            />
            )}
           </View>
          )
        }}
        />
        
      </Navigator>
  )
}

export default TabRoutes;