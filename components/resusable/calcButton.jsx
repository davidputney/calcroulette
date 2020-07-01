import React from 'react';
import { View, Text } from 'react-native';
import { styles } from "../../styles/styles";

 const CalcButton=({ f, buttonText, buttonStyle, val }) => {
    const clicky=(e) => {
      f(e, val)
    }
    return (
      <CalcButton
        style={styles.touchable}
        onPress={clicky}
        underlayColor="white"
        // value={ val }
      >
        <View style={buttonStyle}>
          <Text style={styles.buttonText}>{`${buttonText}`}</Text>
        </View>
      </CalcButton>
    )
   } 

 export { CalcButton } 