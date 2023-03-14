import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const ContainerLogout = styled.View`
   align-items: center;
   margin-bottom: 80px;
`;

export const ContentLogout = styled.View`
   border: 1px solid rgba(0,0,0,0.2);
   border-radius: 50px;
   padding: 10px;
   align-items: center;
   margin-bottom: 10px;
`;

export const TextButton = styled.Text`
   font-size: 16px;
   font-family: ${({theme}) => theme.FONTS.POPPINSMEDIUM};
   color: ${({theme}) => theme.COLORS.PURPLE};
`;



