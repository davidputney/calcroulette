import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from "../../styles/styles";

 const CalcButton=({ f, buttonText, buttonStyle = styles.button, val }) => {
    const clicky=(e) => {
      f(e, val)
    }
    return (
      <TouchableHighlight 
        style={styles.touchable}
        onPress={clicky}
        underlayColor="white"
      >
        <View style={buttonStyle}>
          <Text 
            style={styles.buttonText}
          >{`${buttonText}`}</Text>
        </View>
      </TouchableHighlight>
    )
   } 

 export { CalcButton } 