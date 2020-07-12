import React from 'react';
import { styles } from "../../styles/styles";
import { buttons } from "../../styles/buttons";

import { CalcButton } from '../resusable/calcButton';


const EqualKey = ({ f, active = false }) => { 
    return (
        <CalcButton 
            f = { f } 
            buttonText = { "I feel lucky" } 
            textStyle = {  styles.buttonTextSmall }
            buttonStyle = { active?buttons.buttonWide: buttons.buttonWideInactive }
            touchable = { buttons.touchableWideToo }
            active = { active }
            val={ "=" }
        /> 
    )
}

export { EqualKey }