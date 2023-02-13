import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  margin-top: 50px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    margin-left: -10px;
    margin-top: 30px;
    align-items: center;
    justify-content: space-between;

`;

export const Title = styled.Text`
    text-align: center;
    font-size:${RFValue(25)}px;
    font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
    width: 100%;

`;

export const Description = styled.Text`
    margin-top: ${RFValue(50)}px;
    margin-bottom: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.FONTS.POPPINSBOLD};
    font-size:${RFValue(27)}px;
`;

export const ContentBody = styled.View``;

export const ContentFooter = styled.View`
    margin-top: 30px;
    align-items: center;
    justify-content: center;
`;

export const ContentButton = styled.Pressable`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Title1 = styled.Text`
    font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
    color: ${({theme}) => theme.COLORS.GRAY3};
    font-size:${RFValue(14)}px;
`;

export const Title2 = styled.Text`
    font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
    color: ${({theme}) => theme.COLORS.BLUE};
    font-size:${RFValue(20)}px;
    margin-left: 10px;
`;

