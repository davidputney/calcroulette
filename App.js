import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, Image, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, devMenu } from 'react-native';

// custom fonts
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

//  js imports
import { customFonts } from './imports/fonts'
import { buttonArray, operators } from './imports/button-values'
import { helpers } from './imports/helper-functions'

// svg handlers
import Svg, { Circle, Path, G } from "react-native-svg"


// styles
import { styles } from "./styles/styles";

// components
import { AppContainer } from "./components/appContainer";


  
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
    const sum = !operator ? currentVal.join(""): helpers.doMath(Number(runningVal), Number(currentVal.join("")), operator)
    const op = val === "="? undefined: val;
    this.setState({ runningVal:sum, operator: op, displayVal: sum, currentVal: [] })
  }

  _handleEquals(e, val, active) {
    const {currentVal, runningVal, operator} = this.state
    const sum = !operator && !active? currentVal.join(""): helpers.doMath(Number(runningVal), Number(currentVal.join("")), operator)
    // this.setState({ runningVal:sum, operator: undefined, displayVal: sum, currentVal: Array.from(String(sum), Number) })
    this.setState({ runningVal:sum, operator: operator, displayVal: sum, currentVal: [] })

  }

  _onPressButton(e, v) {   
    const {currentVal, operator, runningVal} = this.state
    const leadZero = helpers.handleLeadZero(v, currentVal)
    const eqlActive = helpers.handleEqlButtonState(operator, runningVal)
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
      {/* <ClearButton /> */}
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


