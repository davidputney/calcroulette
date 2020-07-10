import { StyleSheet } from 'react-native';

const buttons = StyleSheet.create({
    touchable: {
      width: "33.3333%",
      aspectRatio: 1,
      borderRadius: 150,
    },
    touchableWide: {
      width: "100%",
      borderRadius: 150,
    },
    touchableWideToo: {
      width: "100%",
      aspectRatio: 5,
      paddingLeft:12,
      paddingRight:12,
    },
    button: {
      width: "auto",
      aspectRatio:1,
      alignItems: 'center',
      justifyContent:"center",
      backgroundColor: '#ffffff',
    },
    buttonOperator: {
      justifyContent:"center",
      width: "auto",
      aspectRatio:1,
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    buttonWide: {
      justifyContent:"center",
      width: "100%",
      alignItems: 'center',
      backgroundColor: '#D2691E',
      height: "100%",
      borderRadius:4,
      marginTop: 12,
    },
    buttonWideInactive: {
      justifyContent:"center",
      width: "100%",
      alignItems: 'center',
      backgroundColor: '#d0d0d0',
      height: "100%",
      borderRadius:4,
      marginTop: 12,
    },
    clearButton: {
      width:20,
      height:20,
      borderRadius:20,
      backgroundColor:"#e1e0dc",
      position:"absolute",
      right:12,
      marginTop:"auto",
      marginBottom:"auto",
      alignSelf:"center",
    },
  });
  

  export { buttons }