import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Auth/Login';
import Cadastro from '../screens/Auth/Cadastro';
import RecuperarSenha from '../screens/Auth/RecuperarSenha';

const AuthRoutes: React.FC = () => {

    const { Navigator, Screen } = createNativeStackNavigator()

  return (
        <Navigator
        initialRouteName='Cadastro'
        screenOptions={{
            headerShown: false,
        }}
        >
            <Screen 
                name='Login' component={Login}
            />
            <Screen 
                name='Cadastro' component={Cadastro} options={{headerShown: true}}
            />
            <Screen 
                name='RecuperarSenha' component={RecuperarSenha}
            />
        </Navigator>
  )
}

export default AuthRoutes;