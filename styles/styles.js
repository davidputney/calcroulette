import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
      display:"flex",
      flexDirection: 'column',
      justifyContent: 'flex-end',
      // paddingTop: 60,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: "#222222",
      width:"100%",
      height:"100%",
      paddingBottom: 48,
    },
    valueDisplay: {
      width:"100%",
      display:"flex",
      justifyContent: "center",
      paddingLeft: 18,
      backgroundColor:"#eaeaeb",
      aspectRatio:4,
      marginRight:20,
      marginLeft:20,
      marginBottom:12,
    },
    keyboardContainer: {
      display:"flex",
      flexDirection: 'row',
      width:"100%",
      // borderWidth: 1,
      borderColor: "#800000",
      // borderWidth:1,
    },
    keyboardLeft: {
      display:"flex",
      flexDirection: 'column',
      width:"75%",
      // borderWidth: 1,
      borderColor: "#8B008B",
      backgroundColor: "#ffffff"
    },
    keyboardRight: {
      display:"flex",
      flexDirection: 'column',
      width:"25%",
      // borderWidth: 1,
      borderColor: "#DAA520",
    },
    valueKeys: {
      display:"flex",
      flexDirection: 'row',
      flexWrap: "wrap",
      justifyContent: 'flex-start',
      alignItems: 'center',
      // borderWidth: 1,
      borderColor: "#00BFFF",
      width:"100%",
    },
    touchable: {
      width: "33.3333%",
      aspectRatio: 1,
      borderRadius: 150,
    },
    touchableWide: {
      width: "100%",
    },
    touchableWideToo: {
      width: "100%",
      aspectRatio: 5,
      paddingLeft:20,
      paddingRight:20,
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
    buttonText: {
      textAlign: 'center',
      color: '#245360',
      fontSize: 48,
      fontWeight: "bold",
      fontFamily: 'Ginger'
    },
    buttonOperatorText: {
      textAlign: 'center',
      color: '#D2691E',
      fontSize: 48,
      fontWeight: "bold",
      fontFamily: 'Ginger'
    }, 
    buttonTextSmall: {
      textAlign: 'center',
      color: '#ffffff',
      fontSize: 18,
      fontWeight: "bold",
      fontFamily: 'Ginger'
    },
    valueText: {
      fontSize: 48,
      color: "#666666",
      fontWeight:"bold",
      fontFamily: "Ginger",
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