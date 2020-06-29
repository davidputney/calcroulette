import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';


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

 const TouchFoo=({ touch, buttonText, buttonStyle }) => {
  return (
    <TouchableHighlight 
      onPress={touch}
      underlayColor="white"
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
    this.state = { textVal: "Hello world var yyy" }
    this._onPressButton = this._onPressButton.bind(this)
  }  


  _onPressButton() {
    alert('You tapped the button!')
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }


  render() {
    return ( 
      <View style={styles.container}>
        <TouchFoo 
          touch = { this._onPressButton} 
          buttonText = { "Button Text" } 
          buttonStyle = { styles.button }
        />
        <TouchFoo 
          touch = { this._onPressButton} 
          buttonText = { "Button Text Too" } 
          buttonStyle = { styles.buttonAlt }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor: "#d0d0d0",
   paddingTop: 60,
   alignItems: 'center'
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius:3
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
    color: 'white'
  }
});
