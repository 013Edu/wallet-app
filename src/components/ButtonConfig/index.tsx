import React from 'react';
import { Ionicons } from "@expo/vector-icons"

import { 
    Container, 
    Content, 
    ContentIcon, 
    ContentText,
    ContentButton,

 } from './styles';

 interface IButtonConfig {
    title: string;
    icon: string;
    onPress: () => void;
 }

const ButtonConfig: React.FC<IButtonConfig> = ({icon, onPress, title}) => {
    return (
        <Container>
            <Content>
                <ContentIcon>
                    <Ionicons name={icon} size={23} />
                </ContentIcon>
                <ContentText>{title}</ContentText>
            </Content>
            <ContentButton>
                <Ionicons name='chevron-forward-outline' size={23} />
            </ContentButton>
        </Container>
    )
}

export default ButtonConfig;