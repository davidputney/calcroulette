
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from "../../styles/styles";
import { buttons } from "../../styles/buttons";

import { ClearButton } from '../resusable/clearButton';


const ResultWindow = ({ f, val = 0, active = false }) => {
    return (
        <View style={styles.valueDisplay}>
        <Text
            style={active?styles.valueText:styles.valueTextInactive}
        // >{`${val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
        >{`${val}`}</Text>

        <ClearButton 
            f = { f } 
            touchable = { buttons.clearButton }
            val={ "clear" }
            fill={ active?"#666666":"#c0c0c0" }
        />     
        </View>
        )
    }

    export { ResultWindow }

