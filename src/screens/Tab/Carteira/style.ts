import styled from 'styled-components/native';
import { Platform } from "react-native"

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    margin-top: ${Platform.OS === "ios" ? 0 : 27}px;
`;

export const ContentCard = styled.View`
    padding: 25px;
`;

export const Card = styled.View`
    width: 100%;
    height: 140px;
    border-radius: 50px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 40px;
    background-color: ${({theme}) => theme.COLORS.PURPLECard};
`;

export const ContentText1 = styled.View`

`;

export const ContentText2 = styled.View`

`;

export const TextView1 = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE_100};
    font-family: ${({theme}) => theme.FONTS.POPPINSBOLD};
    font-size: 16px;
`;

export const TextView2 = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE_100};
    font-family: ${({theme}) => theme.FONTS.POPPINSBOLD};
    font-size: 23px;
    margin-top: -2px;
`;

export const Body = styled.View`
    width: 100%;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;
export const IconTransfer = styled.Image`
    width: 70px;
    height: 70px;
`;
export const IconPayment = styled.Image`
    width: 70px;
    height: 70px;
`;
export const IconPayOut = styled.Image`
    width: 70px;
    height: 70px;
`;
export const IconTopUp = styled.Image`
    width: 70px;
    height: 70px;
`;
export const Title = styled.Text`
    font-size: 13px;
    color: ${({theme}) => theme.COLORS.PURPLECard};
    font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`;