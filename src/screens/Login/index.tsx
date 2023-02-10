import { SafeAreaView } from "react-native"
import ButtonSocial from "../../components/ButtonSocial";
import ButtonGoogle from "../../components/ButtonGoogle";

import { 
    Container ,
    ContentHeader,
    Title,
    Description,
    ViewButton,
    ContentBody,
    ContentFooter,
} from './style';
import Input from "../../components/Input";

import { useTheme } from "styled-components"
import Button from "../../components/Button";

const Login: React.FC = () => {

    const { COLORS } = useTheme()

  return (
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

                <Button
                title="Entrar"
                onPress={() => {}}
                 />
                
            </ContentBody>

            <ContentFooter>

            </ContentFooter>
        </Container>
    </SafeAreaView>
  );
}

export default Login;