import React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { styles } from "../styles/styles";
import { buttons } from "../styles/buttons";
import { CalcButton } from './resusable/calcButton';
import { ClearButton } from './resusable/clearButton';

// import { CalcButton } from "reusable/calcButton";

const customFonts = {
    'Ginger': require('../assets/fonts/ginger-bold.ttf')
  };

const buttonArray = [1,2,3,4,5,6,7,8,9,0]; 


const AppContainer = ({ isLoaded = false, f, fOp, fClear, fEql, buttonStyle, windowVal }) => {
    if (!isLoaded) {
        return <AppLoading />;
    } 
    return (
        <View style={styles.appContainer}>
        <View style={styles.valueDisplay}>
            <Text
                style={styles.valueText}
            // >{`${windowVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
            >{`${windowVal}`}</Text>

            <ClearButton 
                f = { fClear } 
                touchable = { buttons.clearButton }
                val={ "clear" }
                fill={ "#d0d0d0" }
            />     
        </View>

        <View style={styles.keyboardContainer}>
            <View style={styles.keyboardLeft}>
                <View style={styles.valueKeys}> 
                    { [1,2,3,4,5,6,7,8,9,0,"."].map((el, i) => {
                        return (
                        <CalcButton 
                            f = { f } 
                            buttonText = { el } 
                            buttonStyle = { buttonStyle }
                            val={ el }
                            key = { i }
                        />     
                        )
                    }) }
                </View>
                </View>
                
                <View style={styles.keyboardRight}>
                { ["+","-","x","/"].map((el, i) => {
                        return (
                        <CalcButton 
                            f = { fOp } 
                            buttonText = { el } 
                            textStyle = {  styles.buttonOperatorText }
                            touchable = { buttons.touchableWide }
                            buttonStyle = { buttons.buttonOperator }
                            val={ el }
                            key = { i }
                        />     
                        )
                    }) }
                </View>    
        </View>
        <CalcButton 
                    f = { fEql } 
                    buttonText = { "I feel lucky" } 
                    textStyle = {  styles.buttonTextSmall }
                    buttonStyle = { buttons.buttonWide }
                    touchable = { buttons.touchableWideToo }
                    val={ "=" }
                /> 
        </View>
    );
}

export { AppContainer }