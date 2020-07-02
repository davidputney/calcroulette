import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
      backgroundColor: '#FFA500',
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white',
      fontSize: 48,
      fontWeight: "bold",
      fontFamily: 'Ginger'
    },
    keyboardWrapper: {
      display: "flex",
      flexDirection: "column",
      borderWidth: 2,
      borderColor: "#FFDD00",
      height:"100%",
      width: "100%"
    },
  });
  

  export { styles }