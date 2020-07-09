import React from 'react';
import Svg, { Path, G } from "react-native-svg"
import { TouchableHighlight } from 'react-native';
import { styles } from "../../styles/styles";
import { buttons } from "../../styles/buttons";

const ClearButton=({ f, val="clear", width=20, height=20, fill="#d0d0d0", style=buttons.clearButton }) => {
    const clicky=(e) => {
        f(e, val)
    }
    return (
        <TouchableHighlight 
            style={ style }
            onPress={ clicky }
            underlayColor="#d0d0d0"
        >
            <Svg width={width} height={height} viewBox="0 0 90 91">
                <G fill={fill} fillRule="nonzero">
                    <Path d="M45 .495C20.188.495 0 20.683 0 45.496c0 24.812 20.188 44.999 45 44.999s45-20.187 45-44.999C90 20.683 69.812.495 45 .495zm0 79.875c-19.262 0-34.875-15.613-34.875-34.874C10.125 26.234 25.738 10.62 45 10.62s34.875 15.614 34.875 34.876C79.875 64.757 64.262 80.37 45 80.37z" />
                    <Path d="M60.734 29.76a5.062 5.062 0 00-7.16.001L45 38.336l-8.576-8.575a5.061 5.061 0 00-7.159-.001 5.06 5.06 0 000 7.159l8.575 8.576-8.575 8.576a5.06 5.06 0 003.58 8.641 5.042 5.042 0 003.579-1.483L45 52.654l8.574 8.575a5.047 5.047 0 003.58 1.483 5.062 5.062 0 003.58-8.641l-8.576-8.576 8.576-8.576a5.062 5.062 0 000-7.159z" />
                </G>
            </Svg>
        </TouchableHighlight>
    )
  }
  
  export { ClearButton }

