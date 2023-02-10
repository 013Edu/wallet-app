import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
padding: ${RFValue(40)}px;
`;

export const ContentHeader = styled.View`
    padding: ${RFValue(30)}px;
    justify-content: center;
    align-items: center;
    margin-top: ${RFValue(20)}px;
`
export const Title = styled.Text`
    text-align: center;
    font-size:${RFValue(25)}px;
    font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
    width: 100%;
`
export const Description = styled.Text`
    margin-top: ${RFValue(40)}px;
    font-family: ${({theme}) => theme.FONTS.POPPINSLIGHT};
    font-size:${RFValue(15)}px;
`
export const ViewButton = styled.View`
    flex-direction: row;  
    justify-content: center;
    width: 100%;
`
export const ContentBody = styled.View`
`
export const ContentFooter = styled.View`
`
