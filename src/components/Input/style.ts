import styled from 'styled-components/native';


export const Containerasd = styled.View`
    width: 100%;
    height: 45px;
    padding: 0 12px;
    margin-top: 12px;
    border-radius: 8px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.GRAY5};
`;

export const InputContainer = styled.TextInput`
    flex: 1;
    height: 45px;
    border: 0;
    border-radius: 8px;
    font-family: ${({theme}) => theme.FONTS.POPPINSLIGHT};
`;
