import React from 'react';
import { View } from 'react-native';
import { styles } from "../../styles/styles";
import { buttons } from "../../styles/buttons";
import { CalcButton } from '../resusable/calcButton';
import { buttonArray } from '../../imports/button-values'

const NumberKeys = ({ f }) => {
   return  (
        <View style={styles.keyboardLeft}>
        <View style={styles.valueKeys}> 
            { buttonArray.map((el, i) => {
                return (
                    <CalcButton 
                        f = { f } 
                        buttonText = { el } 
                        buttonStyle = { buttons.button }
                        val={ el }
                        key = { i }
                    />     
                )
            }) }
        </View>
        </View>
   )
}

export { NumberKeys }

