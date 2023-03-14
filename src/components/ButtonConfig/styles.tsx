import styled from 'styled-components/native';

export const Container = styled.View`
 padding: 10px 20px;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin-top: 30px;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ContentIcon = styled.View.attrs({

    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20
})`
    margin-right: 20px;
    padding: 10px;
    border-radius: 50px;
    background-color: #ffffff8d;
`;

export const ContentText = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const ContentButton = styled.TouchableOpacity`

`;
