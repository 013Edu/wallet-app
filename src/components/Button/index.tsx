import React from 'react';

import { Container, Title, Content } from './style';
import { AntDesign } from "@expo/vector-icons"
import { useTheme } from "styled-components"

import { TouchableOpacityProps, ActivityIndicator } from 'react-native';

import { variants } from "./variante"


 interface ButtonProps {
    title: string
    onPress: () => void
    iconName?: keyof typeof AntDesign.glyphMap
    isLoading?: boolean
    disable?: boolean
    variant?: 'primary' |'outline' |'black' |'transparent'
    style?: TouchableOpacityProps['style']
 }

const Button: React.FC<ButtonProps> = ({
  title, 
  onPress,
  iconName,
  isLoading,
  disable,
  style,
  variant = 'primary'
}) => {

  const buttonVariant = variants[variant]
  const buttonStyle = disable ? buttonVariant.disable : buttonVariant.enable

  const { COLORS } = useTheme()


  return (
    <Container
    onPress={onPress}
    disabled={isLoading || disable}
    style={[buttonStyle.button, style]}
    >
      {
        isLoading ? (
          <ActivityIndicator color={COLORS.GRAY1} />
        ) : (
          <Content>
            {
              iconName &&
              <AntDesign 
              size={23}
              name={iconName}
              color={buttonStyle.icon.color}
              style={{
                marginRight: 15,
              }}
              />
            }
          </Content>
        )
      }
         <Title>
            {title}
         </Title>
    </Container>
  )
}

export default Button;