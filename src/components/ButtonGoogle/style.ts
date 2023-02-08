import styled from 'styled-components/native';

import { RFValue } from "react-native-responsive-fontsize"

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    margin-left: 16px;
    margin-top: 16px;
    border-radius: ${RFValue(130)}px;
    justify-content: center;
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(5)}px;
    background-color: ${({theme}) => theme.COLORS.GRAY6};
`;

export const Icone = styled.Image`
    width: ${RFValue(30)}px;
    height: ${RFValue(30)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    margin-left:  ${RFValue(10)}px;
`;

