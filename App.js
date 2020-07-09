import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, Image, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, devMenu } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import * as Font from 'expo-font';

import Svg, { Circle, Path, G } from "react-native-svg"


// styles
import { styles } from "./styles/styles";
import { buttons } from "./styles/buttons";

// components
import { AppContainer } from "./components/appContainer";
import { ClearButton } from "./components/resusable/clearButton";


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


//  const doAdd = (val1, val2) => (val1+val2)
//  const doSub = (val1, val2 = 0) => (val1 - val2)
//  const doMulti = (val1, val2 = 1) => (val1 * val2)
//  const doDiv = (val1, val2 = 1) => (val1 / val2)

 const doMath = (val1, val2, op) => {
   console.log("operator", op)
   return op === "+"? (val1+val2): op === "-"? (val1-val2): op === "/"? (val1/val2): op === "x"? (val1*val2): "error";
 }
  
export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = { fontsLoaded: false, currentVal: [], retainedVal: 0, operator: undefined, runningVal: 0, displayVal: 0 }
    this._onPressButton = this._onPressButton.bind(this)
    this._handleOperator = this._handleOperator.bind(this)
    this._handleClear = this._handleClear.bind(this)
    this._handleEquals = this._handleEquals.bind(this)
  }  

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true })
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  _handleClear(e, val) {
    this.setState({ currentVal: [], retainedVal: 0, operator: undefined, runningVal: 0, displayVal: 0 })
  }

  _handleOperator(e, val) {
    const {currentVal, runningVal, operator} = this.state
    const sum = !operator ? currentVal.join(""): doMath(Number(runningVal), Number(currentVal.join("")), operator)
    // const op = val === "="? operator: val;
    // console.log("op", op)
    this.setState({ runningVal:sum, operator: val, displayVal: sum, currentVal: [] })
  }

  _handleEquals(e, val) {
    const {currentVal, runningVal, operator} = this.state
    const sum = !operator ? currentVal.join(""): doMath(Number(runningVal), Number(currentVal.join("")), operator)
    this.setState({ runningVal:sum, operator: undefined, displayVal: sum, currentVal: Array.from(String(sum), Number) })
  }

  _onPressButton(e, v) {   
    const {currentVal} = this.state
    const decimal = currentVal.some((el) => el === ".")
    const r = decimal && v === "."?currentVal : [...currentVal, v]
    this.setState({ currentVal: r, displayVal: r.join("") })
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }
  
  render() {
    console.log(this.state)
    return ( 
    <View>
      <ClearButton />
    <AppContainer 
      isLoaded = { this.state.fontsLoaded }
      f = { this._onPressButton } 
      fOp = { this._handleOperator }
      fEql = { this._handleEquals }
      fClear = { this._handleClear }
      windowVal = { this.state.displayVal }
    />
   </View>
    );
  }
} 


