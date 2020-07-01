import { StyleSheet } from 'react-native';

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
      fontFamily: 'Ginger'
    },
    buttonOperator: {
      justifyContent:"center",
      width: "auto",
      aspectRatio:1,
      alignItems: 'center',
      backgroundColor: '#FFA500',
      fontFamily: 'Ginger'
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
  

  export { styles }