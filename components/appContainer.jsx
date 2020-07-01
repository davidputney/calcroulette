import React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { styles } from "../styles/styles";
import { CalcButton } from './resusable/calcButton';

// import { CalcButton } from "reusable/calcButton";

const customFonts = {
    'Ginger': require('../assets/fonts/ginger-bold.ttf')
  };

const buttonArray = [1,2,3,4,5,6,7,8,9,0]; 


// const AppContainer = ({ isLoaded = false, f, buttonStyle }) => {
//     if (!isLoaded) {
//         return <AppLoading />;
//     } 
//     return (
//         <View
//             style={styles.container}
//         >
//             <Text>sdsdfd</Text>
//         </View>
//     );
// }

const AppContainer = ({ isLoaded = false, f, buttonStyle }) => {
    if (!isLoaded) {
        return <AppLoading />;
    } 
    return (
        <View
            style={styles.container}
        >
            <Text>sdsdfd</Text>
        </View>
    );
}

export { AppContainer }