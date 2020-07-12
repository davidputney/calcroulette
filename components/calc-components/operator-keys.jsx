import React from 'react';
import { View } from 'react-native';
import { styles } from "../../styles/styles";
import { buttons } from "../../styles/buttons";
import { CalcButton } from '../resusable/calcButton';
import { operators } from '../../imports/button-values'

const OperatorKeys = ({ f }) => {
return (
<View style={styles.keyboardRight}>
    { operators.map((el, i) => {
        const {value, display } = el
        return (
            <CalcButton 
                f = { f } 
                buttonText = { display } 
                textStyle = {  styles.buttonOperatorText }
                touchable = { buttons.touchableWide }
                buttonStyle = { buttons.buttonOperator }
                val={ value }
                key = { i }
            />     
            )
        }) } 
    </View> 
    )
}     

export { OperatorKeys }


