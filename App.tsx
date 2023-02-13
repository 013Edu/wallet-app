import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import COLORS from "./theme"

import { ThemeProvider } from "styled-components/native"

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold
} 
from "@expo-google-fonts/poppins"
import Routes from './src/routes';

export default function App() {

const [fontsLoaded] = useFonts({
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,

})


  return (
   <ThemeProvider theme={COLORS}>
        <StatusBar 
          style="dark" 
          translucent
          />

          <Routes />

   </ThemeProvider>
  );
}
