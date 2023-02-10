import { Container, InputText, IContainer } from "./style";

import { Text, TextInputProps } from "react-native"

import { 

    forwardRef,
    useCallback,
    useState,
    useImperativeHandle,
    useRef,
    useEffect

} from  "react"

import { useField } from "@unform/core"

import { Ionicons } from "@expo/vector-icons"

import { useTheme } from "styled-components"

interface InputRef {
    focus(): void
}

interface InputValueReference {
    value: string
}

interface InputProps extends TextInputProps {
    name: string
    value?: string
    iconName?: React.ComponentProps<typeof Ionicons>["name"]
    containerStyle?: {[key:string]: string | number}
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({
    name,
    value,
    iconName,
    containerStyle,
    ...rest
}) => {

    const theme = useTheme()
    
    const [hasError, setHasError] = useState(false)
    const [isFocused, setIsFocusedr] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    
  return (
    <Container>
       <IContainer
        isFilled={isFilled}
        hasError={hasError}
        isFocused={isFocused}
       >

        <Ionicons
        name={iconName}
        size={25}
        color={isFilled || isFocused || hasError ? theme.COLORS.BLUE1 : theme.COLORS.GRAY3}
         />

       </IContainer>

       <InputText
        isFilled={isFilled}
        hasError={hasError}
        isFocused={isFocused}
       >

       </InputText>
    </Container>
  );
}

export default Input;