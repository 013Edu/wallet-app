import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { useTheme } from 'styled-components';

import { useNavigation } from '@react-navigation/native';

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

const RecuperarSenha: React.FC = () => {

  const navigation = useNavigation()

  const { COLORS } = useTheme()

  const handleVoltarLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <Container>
       <ContentHeader>
        <Title>Seja bem vindo(a) a sua{"\n"}carteira virtual!</Title>
        <Description>RECUPERRAR SENHA</Description>
       </ContentHeader>
       <ContentBody>
        <Input 
        leftIcon
        iconName='mail-outline'
        iconSize={23}
        autoCapitalize="none"
        keyboardType='default'
        secureTextEntry={false}
        iconColor={COLORS.GRAY3}
        placeholder="Digite seu e-mail"
        />
       </ContentBody>
       <Button 
       title='Recuperar'
       onPress={() => {}}
       style={{
        marginTop: 60
       }}
       />
       <ContentFooter>
        <ContentButton onPress={handleVoltarLogin}>
          <Title1>Não quer recuperar a senha?</Title1>
          <Title2>Voltar</Title2>
        </ContentButton>
       </ContentFooter>
    </Container>
  )
}

export default RecuperarSenha;