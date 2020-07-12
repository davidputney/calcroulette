import React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { styles } from "../styles/styles";
import { buttons } from "../styles/buttons";
import { CalcButton } from './resusable/calcButton';
import { ClearButton } from './resusable/clearButton';

import { buttonArray, operators } from '../imports/button-values'
import { customFonts } from '../imports/fonts'
import { ResultWindow } from './calc-components/result-window';
import { NumberKeys} from './calc-components/number-keys';
import { OperatorKeys } from './calc-components/operator-keys'
import { EqualKey } from './calc-components/equal-key'



const AppContainer = ({ isLoaded = false, f, fOp, fClear, fEql, windowVal, active, eqlActive }) => {
    if (!isLoaded) {
        return <AppLoading />;
    } 
    return (
        <View style={styles.appContainer}>
            <ResultWindow 
                f = { fClear }
                val = { windowVal }
                active = { active }
            >          
            </ResultWindow>

            <View style={styles.keyboardContainer}>
                <NumberKeys 
                    f = {f}>
                </NumberKeys>
                <OperatorKeys 
                    f = { fOp }>
                </OperatorKeys>    
            </View>

            <EqualKey
                f = { fEql }
                active = { eqlActive }
            >
            </EqualKey>
        </View>
    );
}

export { AppContainer }