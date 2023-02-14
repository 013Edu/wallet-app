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

export const ContentFlat = styled.View`
    padding: 10px 20px;
    margin-top: 20px;
`;
export const ContentFlatHeader = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 10px;
`;
export const ButtonAllView = styled.TouchableOpacity`

`;

export const ButtonTitle = styled.Text`
    font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
    color: ${({theme}) => theme.COLORS.PURPLECard};
`;

export const ContentFlatFooter = styled.View`
    padding: 2px 20px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: -23px;
`;
export const Icontransaction = styled.Image`
    margin-top: 15px;
`;
export const DetailsTransaction = styled.View`
    margin-left: -80px;
`;
export const NameTransaction = styled.Text`
    font-size: 16px;
    font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`;
export const SubtitleTransaction = styled.Text`
    font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
    color: ${({theme}) => theme.COLORS.GRAY4};
`;
export const RiceTransaction = styled.Text`
    font-size: 16px;
    font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
    color: ${({theme}) => theme.COLORS.GRAY2}
`;

export const TitleFlat = styled.Text`
    font-family: ${({theme}) => theme.FONTS.POPPINSBOLD};
    color: ${({theme}) => theme.COLORS.BLACK};
    font-size: 20px;
`;
