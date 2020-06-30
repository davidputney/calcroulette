import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';


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
    this.state = { textVal: "Hello world var yyy", numberButtons: buttonArray }
    this._onPressButton = this._onPressButton.bind(this)
  }  


  _onPressButton(e, val) {
    // alert('You tapped the button!')
    console.log(val)
  }

  // const _onPressButton=e => touch(e)

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }


  render() {
    return ( 
      <View 
        style={styles.keyboardWrapper }
      >
      <View style={styles.container}>    
      { buttonArray.map((el, i) => {
        return (
          <TouchFoo 
          touch = { this._onPressButton} 
          buttonText = { el } 
          buttonStyle = { styles.button }
          val={ el }
          key = { i }
        />     
        )
      }) }
  
      { operators.map((el, i) => {
        console.log(el)
        const { value, display } = el;
        return (
          <TouchFoo 
          touch = { this._onPressButton} 
          buttonText = { display } 
          buttonStyle = { styles.buttonOperator }
          val={ value }
          key = { i }
        />     
        )
      }) }
    </View>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'row',
   flexWrap: "wrap",
   justifyContent: 'center',
   paddingTop: 60,
   alignItems: 'center',
   borderWidth: 2,
   borderColor: "#222222",
   width:"100%"
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  touchable: {
    width: "33.3333%",
    aspectRatio: 1
  },
  button: {
    width: "auto",
    aspectRatio:1,
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor: '#2196F3',
  },
  buttonOperator: {
    justifyContent:"center",
    width: "auto",
    aspectRatio:1,
    alignItems: 'center',
    backgroundColor: '#FFA500'
  },
  buttonAlt: {
    width: 260,
    alignItems: 'center',
    backgroundColor: '#FFA500',
    borderRadius:3
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontSize: 48,
    fontWeight: "bold"
  },
  keyboardWrapper: {
    display: "flex",
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "#FFDD00",
    height:"100%",
    width: "100%"
  },
  container: {
    display:"flex",
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center',
    paddingTop: 60,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "#222222",
    width:"100%",
   },
});
