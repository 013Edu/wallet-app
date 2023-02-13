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
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -30px;
`
export const ButtonSignUp = styled.Pressable`
   align-items: center;
   justify-content: center;
   flex-direction: row;
`

export const TitleSignUp1 = styled.Text`
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY4};
    font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`
export const TitleSignUp2 = styled.Text`
    font-size: 17px;
    margin-left: 10px;
    color: ${({theme}) => theme.COLORS.BLUE2};
    font-family: ${({theme}) => theme.FONTS.POPPINSBOLD};
`

export const ContentForgotPassword = styled.View`
    width: 100%;
    padding: 20px;
    margin-top: 15px;
    align-items: flex-end;
    justify-content: flex-end;
`
export const ContentButtonForgotPassword = styled.Pressable`
    align-items: center;
`
export const TitleButtonForgotPassword = styled.Text`
    font-size: 17px;
    color: ${({theme}) => theme.COLORS.GRAY3};
    font-family: ${({theme}) => theme.FONTS.POPPINSREGULAR};
`
