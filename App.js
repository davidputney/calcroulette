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

 const doMath = (val1, val2, op) => {
   console.log("operator", op)
   return op === "+"? (val1+val2): op === "-"? (val1-val2): op === "÷"? (val1/val2): op === "x"? (val1*val2): "error";
 }

 const handleEqlButtonState = (runningVal, operator) => operator && runningVal;
 const handleLeadZero = (v, r) =>  v === 0 && r.length === 0; 

 const rando = (val) => Math.floor(Math.random() * val) + 1 ; 
  
export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
    this.state = { fontsLoaded: false, currentVal: [], operator: undefined, runningVal: undefined, displayVal: 0, active: false, eqlActive:false }
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
    this.setState({ currentVal: [], retainedVal: 0, operator: undefined, runningVal: undefined, displayVal: 0, active: false, eqlActive: false })
  }

  _handleOperator(e, val) {
    const {currentVal, runningVal, operator} = this.state
    const sum = !operator ? currentVal.join(""): doMath(Number(runningVal), Number(currentVal.join("")), operator)
    const op = val === "="? undefined: val;
    this.setState({ runningVal:sum, operator: op, displayVal: sum, currentVal: [] })
  }

  _handleEquals(e, val, active) {
    const {currentVal, runningVal, operator} = this.state
    const sum = !operator && !active? currentVal.join(""): doMath(Number(runningVal), Number(currentVal.join("")), operator)
    this.setState({ runningVal:sum, operator: undefined, displayVal: sum, currentVal: Array.from(String(sum), Number) })
  }

  _onPressButton(e, v) {   
    const {currentVal, operator, runningVal} = this.state
    const leadZero = handleLeadZero(v, currentVal)
    const eqlActive = handleEqlButtonState(operator, runningVal)
    const decimal = currentVal.some((el) => el === ".")
    const r = decimal && v === "." || leadZero? currentVal: [...currentVal, v]
    this.setState({ currentVal: r, displayVal: leadZero? 0: r.join(""), active: !leadZero, eqlActive: eqlActive })
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }
  
  render() {
    // console.log(this.state)
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
      active = { this.state.active }
      eqlActive = { this.state.eqlActive }
    />
   </View>
    );
  }
} 


