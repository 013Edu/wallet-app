import React from 'react';

import { Container, ContainerLogout, ContentLogout, TextButton } from './style';

import Header from "../../../components/Header"
import ButtonConfig from '../../../components/ButtonConfig';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const Settings: React.FC = () => {

  const { COLORS } = useTheme()

  const navigation = useNavigation()

  const handleGoProfile = () => {
    navigation.navigate("Profile")
  }

  return (
    <>
      <Header appName='Configuração' />
      <Container>
        <ButtonConfig title='Perfil do Usuário' icon='person-outline' onPress={handleGoProfile} />
        <ButtonConfig title='Notificações' icon='notifications-outline' onPress={() => { }} />
        <ButtonConfig title='Sua Carteira' icon='wallet-outline' onPress={() => { }} />
        <ButtonConfig title='Configurações de Login' icon='log-in-outline' onPress={() => { }} />
        <ButtonConfig title='Centro de Ajuda' icon='call-outline' onPress={() => { }} />
      </Container>
      <ContainerLogout>
        <ContentLogout>
          <TouchableOpacity>
            <Ionicons name='log-out-outline' size={30} color={COLORS.PURPLE1} />
          </TouchableOpacity>
        </ContentLogout>
        <TextButton>Desconectar</TextButton>
      </ContainerLogout>
    </>
  )
}

export default Settings;
