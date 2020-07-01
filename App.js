import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, Image, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, devMenu } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import * as Font from 'expo-font';


// styles
import { styles } from "./styles/styles";

// components
import { AppContainer } from "./components/appContainer";


const customFonts = {
  'Ginger': require('./assets/fonts/ginger-bold.ttf')
};


const buttonArray = [1,2,3,4,5,6,7,8,9,0];
const operators = [{value: "minus", display: "-"},
  {value: "add", display: "+" },
  {value: "multiply", display: "x" },
  {value: "divide", display: "÷" },
  {value: "equals", display: "=" }
]
const TextFoo=({ textVal }) => {
  return (
      <Text>{`${textVal}`}</Text>
  )
}

const ViewFoo=({ textVal }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextFoo textVal = { textVal } />
    </View>  
  )
}

const ButtonFoo=() => {
  return (
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me Here"
        color="#841584"
      />
    )
  }

 const TouchFoo=({ touch, buttonText, buttonStyle, val }) => {
  const clicky=(e) => {
    touch(e, val)
  }
  return (
    <TouchableHighlight 
      style={styles.touchable}
      onPress={clicky}
      underlayColor="white"
      // value={ val }
    >
      <View style={buttonStyle}>
        <Text style={styles.buttonText}>{`${buttonText}`}</Text>
      </View>
    </TouchableHighlight>
  )
 } 

  
export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = { textVal: "Hello world var yyy", numberButtons: buttonArray,  fontsLoaded: false, }
    this._onPressButton = this._onPressButton.bind(this)
  }  

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true })
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  _onPressButton(e, val) {
    // alert('You tapped the button!')
    console.log(val)
    console.log(this.state.fontsLoaded)
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }
  
  render() {
    return ( 
    <AppContainer 
      isLoaded = { this.state.fontsLoaded }
      f = { this._onPressButton } 
      buttonStyle = { styles.button }
    />
   
    );
  }
}


