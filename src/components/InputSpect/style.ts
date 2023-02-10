import styled, { css } from 'styled-components/native';

import { RFValue } from "react-native-responsive-fontsize"

import { ViewProps, TextInput } from 'react-native';


interface IContainerProps extends ViewProps {
    hasError: boolean
    isFocused: boolean
    isFilled?: boolean
}

interface ITextInputContainerProps extends ViewProps {
    hasError: boolean
    isFocused: boolean
    isFilled?: boolean
}

export const Container = styled.View`

    width: 85%;
    flex-direction: row;
    height: ${RFValue(50)}px;
    margin-bottom: ${RFValue(30)}px;;

`

export const IContainer = styled.View<IContainerProps>`

    width: ${RFValue(53)}px;
    height: ${RFValue(50)}px;   
    justify-content: center;
    align-items: center;

    ${({isFocused, isFilled}) => (isFocused || isFilled) && css`

    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: ${({theme}) => theme.COLORS.BLUE1};

    `}
    ${({hasError}) => hasError && css`

    border-bottom-color: ${({theme}) => theme.COLORS.RED};

    `}

    margin-right: ${RFValue(3)}px;
    border-top-left-radius: ${RFValue(5)}px;
    border-bottom-left-radius: ${RFValue(5)}px;
    background-color: ${({theme}) => theme.COLORS.GRAY5};

`

export const InputText = styled(TextInput)<ITextInputContainerProps>`

    flex: 1;
    font-size: ${RFValue(12)}px;
    border-top-right-radius: ${RFValue(12)}px;
    border-bottom-right-radius: ${RFValue(12)}px;
    color: ${({theme}) => theme.COLORS.GRAY};
    font-family: ${({theme}) => theme.FONTS.POPPINSLIGHT};
    background-color: ${({theme}) => theme.COLORS.GRAY5};

    ${({isFocused, isFilled}) => (isFocused || isFilled) && css`

    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: ${({theme}) => theme.COLORS.BLUE1};

    `}

    padding: ${RFValue(12)}px;

`


