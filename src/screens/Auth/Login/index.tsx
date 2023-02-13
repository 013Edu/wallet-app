import { SafeAreaView, KeyboardAvoidingView } from "react-native"
import ButtonSocial from "../../../components/ButtonSocial";
import ButtonGoogle from "../../../components/ButtonGoogle";

import { 
    Container ,
    ContentHeader,
    Title,
    Description,
    ViewButton,
    ContentBody,
    ContentFooter,
    TitleSignUp1,
    TitleSignUp2,
    ButtonSignUp,
    ContentForgotPassword,
    ContentButtonForgotPassword,
    TitleButtonForgotPassword

} from './style';

import Input from "../../../components/Input";

import { useTheme } from "styled-components"

import { useNavigation } from "@react-navigation/native";

import Button from "../../../components/Button";

const Login: React.FC = () => {

    const { COLORS } = useTheme()

    const navigation = useNavigation()

    const handleCadastro = () => {
        navigation.navigate("Cadastro")
    }

    const handleRecuperarSenha = () => {
        navigation.navigate("RecuperarSenha")
    }

  return (
    <KeyboardAvoidingView
    behavior="position"
    enabled
    >
    <SafeAreaView>
        <Container>
            <ContentHeader>
                <Title>
                    Seja bem vindo(a) a sua{"\n"}carteira virtual!
                </Title>
                <Description>
                    Entrar com rede sociais
                </Description>
                <ViewButton>
                    <ButtonGoogle title="Google" />
                    <ButtonSocial icon="facebook" title="Facebook" />
                </ViewButton>
            </ContentHeader>

            <ContentBody>
                <Input 
                iconName="mail-outline"
                iconSize={23}
                iconColor={COLORS.TEXTDARK}
                leftIcon
                placeholder="Digite seu e-mail"
                secureTextEntry={false}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                />

                <Input 
                iconName="lock-closed-outline"
                iconSize={23}
                iconColor={COLORS.TEXTDARK}
                leftIcon
                rightIcon
                placeholder="Digite sua senha"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                />  

                <ContentForgotPassword>
                  <ContentButtonForgotPassword onPress={handleRecuperarSenha}>
                    <TitleButtonForgotPassword>Recuperar senha</TitleButtonForgotPassword>
                  </ContentButtonForgotPassword>
                </ContentForgotPassword>

                <Button
                title="Entrar"
                onPress={() => {}}
                 />    
                 
                
            </ContentBody>

            <ContentFooter>
               <ButtonSignUp
               onPress={handleCadastro}
               >
               <TitleSignUp1>Ainda não tem uma conta?</TitleSignUp1>
                <TitleSignUp2>Cadastre-se</TitleSignUp2>
               </ButtonSignUp>
            </ContentFooter>
        </Container>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default Login;