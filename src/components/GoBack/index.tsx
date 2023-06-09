import React from 'react';

import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { CaretCircleLeft } from 'phosphor-react-native';

const navigation = useNavigation();
const { COLORS } = useTheme();



const GoBack: React.FC = () => {
    return (
        <Container onPress={() => navigation.goBack}>
            <CaretCircleLeft size={40} weight='regular' color={COLORS.GRAY2} />
        </Container>
    )
}

export default GoBack;