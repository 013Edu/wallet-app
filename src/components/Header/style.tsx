import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    padding: 10px 20px;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${Platform.OS === "ios" ? 0 : 27}px;
`;

export const ContentHeader = styled.View`
    justify-content: center;
`;

export const AppName = styled.Text`
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.GRAY1};
    font-family: ${({theme}) => theme.FONTS.POPPINSBOLD};
`;

export const Status = styled.Text`
    font-size: 15px;
    color: ${({theme}) => theme.COLORS.GRAY4};
    font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
`;

export const Avatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 50px;
`;
