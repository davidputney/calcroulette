import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
      display:"flex",
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width:"100%",
      height:"100%",
      paddingBottom: 48,
    },
    valueDisplay: {
      width:"100%",
      display:"flex",
      alignItems:"center",
      flexDirection: "row",
      paddingLeft: 18,
      backgroundColor:"#e1e0dc",
      aspectRatio:4,
      marginBottom:12,
      position:"relative",
    },
    keyboardContainer: {
      display:"flex",
      flexDirection: 'row',
      width:"100%",
      paddingLeft:12,
      paddingRight:12,
    },
    keyboardLeft: {
      display:"flex",
      flexDirection: 'column',
      width:"75%",
      backgroundColor: "#ffffff",
    },
    keyboardRight: {
      display:"flex",
      flexDirection: 'column',
      width:"25%",
    },
    valueKeys: {
      display:"flex",
      flexDirection: 'row',
      flexWrap: "wrap",
      justifyContent: 'flex-start',
      alignItems: 'center',
      width:"100%",
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
    valueTextInactive: {
      fontSize: 48,
      color: "#c0c0c0",
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