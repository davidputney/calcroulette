import React from 'react';
import { View } from 'react-native';
import { styles } from "../../styles/styles";
import { buttons } from "../../styles/buttons";
import { CalcButton } from '../resusable/calcButton';
import { buttonArray } from '../../imports/button-values'

const OperatorKeys = ({ f }) => {
return (
<View style={styles.keyboardRight}>
    { ["+","-","x","÷"].map((el, i) => {
        return (
            <CalcButton 
                f = { f } 
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
    )
}     

export { OperatorKeys }


