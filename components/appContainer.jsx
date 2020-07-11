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

// const buttonArray = [1,2,3,4,5,6,7,8,9,0]; 


const AppContainer = ({ isLoaded = false, f, fOp, fClear, fEql, buttonStyle, windowVal, active = false, eqlActive = false }) => {
    if (!isLoaded) {
        return <AppLoading />;
    } 
    return (
        <View style={styles.appContainer}>
        <View style={styles.valueDisplay}>
            <Text
                style={active?styles.valueText:styles.valueTextInactive}
            // >{`${windowVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
            >{`${windowVal}`}</Text>

            <ClearButton 
                f = { fClear } 
                touchable = { buttons.clearButton }
                val={ "clear" }
                fill={ active?"#666666":"#c0c0c0" }
            />     
        </View>

        <View style={styles.keyboardContainer}>
            <View style={styles.keyboardLeft}>
                <View style={styles.valueKeys}> 
                    { buttonArray.map((el, i) => {
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
                { ["+","-","x","÷"].map((el, i) => {
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
                    buttonStyle = { eqlActive?buttons.buttonWide: buttons.buttonWideInactive }
                    touchable = { buttons.touchableWideToo }
                    active = { eqlActive}
                    val={ "=" }
                /> 
        </View>
    );
}

export { AppContainer }