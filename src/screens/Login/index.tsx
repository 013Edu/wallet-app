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


const Login: React.FC = () => {
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

            </ContentBody>

            <ContentFooter>

            </ContentFooter>
        </Container>
    </SafeAreaView>
  );
}

export default Login;