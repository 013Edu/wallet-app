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
          tabBarInactiveTintColor: theme.COLORS.WHITE,
          tabBarActiveTintColor: theme.COLORS.WHITE,
          tabBarStyle : {
            paddingBottom: 7,
            backgroundColor: theme.COLORS.PURPLECard,
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
               color={focused ? theme.COLORS.WHITE : theme.COLORS.WHITE}
             />
            ) : (
              <Ionicons 
              name='card-outline'
              size={28}
              color={focused ? theme.COLORS.WHITE : theme.COLORS.WHITE}
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
               color={focused ? theme.COLORS.WHITE : theme.COLORS.WHITE}
             />
            ) : (
              <Ionicons 
              name='bookmarks-outline'
              size={28}
              color={focused ? theme.COLORS.WHITE : theme.COLORS.WHITE}
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
               color={focused ? theme.COLORS.WHITE : theme.COLORS.WHITE}
             />
            ) : (
              <Ionicons 
              name='notifications-outline'
              size={28}
              color={focused ? theme.COLORS.WHITE : theme.COLORS.WHITE}
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
               color={focused ? theme.COLORS.WHITE : theme.COLORS.WHITE}
             />
            ) : (
              <Ionicons 
              name='aperture-outline'
              size={28}
              color={focused ? theme.COLORS.WHITE : theme.COLORS.WHITE}
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