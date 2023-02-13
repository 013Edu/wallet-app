import React from 'react';
import Input from '../../../components/Input';

import { useTheme } from 'styled-components'; 

import { 
  Container,
  ContentHeader,
  Title,
  Description,
  ContentBody,
  ContentFooter,
  ContentButton,
  Title1,
  Title2,
} from './style';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

const Cadastro: React.FC = () => {

  const theme = useTheme()

  const navigation = useNavigation()

  const handleVoltarLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <Container>
       <ContentHeader>
        <Title>Seja bem vindo(a) a sua{"\n"}carteira virtual!</Title>
        <Description>CADASTRO</Description>
       </ContentHeader>
       <ContentBody>
        <Input 
        leftIcon
        iconName='person-outline'
        iconSize={23}
        autoCapitalize="none"
        keyboardType='default'
        secureTextEntry={false}
        iconColor={theme.COLORS.GRAY3}
        placeholder="Digite seu nome"
        />
         <Input 
        leftIcon
        iconName='mail-outline'
        iconSize={23}
        autoCapitalize="none"
        keyboardType='email-address'
        secureTextEntry={false}
        iconColor={theme.COLORS.GRAY3}
        placeholder="Digite seu e-mail"
        />
         <Input 
        leftIcon
        rightIcon
        iconName='lock-closed-outline'
        iconSize={23}
        autoCapitalize="none"
        keyboardType='default'
        secureTextEntry={true}
        iconColor={theme.COLORS.GRAY3}
        placeholder="Digite sua senha"
        />
             <Input 
        leftIcon
        rightIcon
        iconName='lock-closed-outline'
        iconSize={23}
        autoCapitalize="none"
        keyboardType='default'
        secureTextEntry={true}
        iconColor={theme.COLORS.GRAY3}
        placeholder="Digite sua senha novamente"
        />
       </ContentBody>
       <Button 
       title='Cadastrar'
       onPress={() => {}}
       style={{
        marginTop: 60
       }}
       />
       <ContentFooter>
        <ContentButton onPress={handleVoltarLogin}>
          <Title1>Já tem conta?</Title1>
          <Title2>Logar-se</Title2>
        </ContentButton>
       </ContentFooter>
    </Container>
  )
}

export default Cadastro;