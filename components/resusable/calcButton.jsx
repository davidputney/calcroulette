import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from "../../styles/styles";
import { buttons } from "../../styles/buttons";

 const CalcButton=({ f, buttonText, textStyle=styles.buttonText, buttonStyle = buttons.button, touchable = buttons.touchable, val }) => {
    const clicky=(e) => {
      f(e, val)
    }
    return (
      <TouchableHighlight 
        style={touchable}
        onPress={clicky}
        underlayColor="#d0d0d0"
      >
        <View style={buttonStyle}>
          <Text 
            style={textStyle}
          >{`${buttonText}`}</Text>
        </View>
      </TouchableHighlight>
    )
   } 

 export { CalcButton } 