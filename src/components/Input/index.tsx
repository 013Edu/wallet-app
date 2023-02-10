import React, { useState } from 'react';
import { Containerasd, InputContainer } from './style';

import { Ionicons } from "@expo/vector-icons"
import { useTheme } from 'styled-components/native';

import { TextInputProps } from "react-native"
import { TouchableOpacity } from 'react-native';

interface InputProps {
    rightIcon?: boolean
    leftIcon?: boolean
    iconName: string
    iconSize?: number
    iconColor?: string
    secureTextEntry: boolean
    
}

const Input: React.FC<InputProps & TextInputProps> = ({
   rightIcon,
   leftIcon, 
   iconName , 
   iconColor, 
   iconSize, 
   secureTextEntry,
   ...rest}) => {

    const { COLORS } = useTheme()

    const [security, setSecurity] = useState(secureTextEntry)

  return (
   <Containerasd>
    {leftIcon && 
      (
        <Ionicons
        name={iconName}
        size={iconSize}
        color={iconColor || COLORS.TEXTDARK}
        style={{padding: 5}}
         />
      )
    }
        <InputContainer 
        {...rest}
        secureTextEntry={security}
        />
        
    {rightIcon && 
      <TouchableOpacity onPress={() => setSecurity(!security)}>
            <Ionicons
          name={!security ? 'eye-outline' : 'eye-off-outline'}
          size={iconSize}
          color={iconColor || COLORS.TEXTDARK}
          style={{padding: 5}}
          />
      </TouchableOpacity>
    }
   </Containerasd>
  )
}

export default Input;