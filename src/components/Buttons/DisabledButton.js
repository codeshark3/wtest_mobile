import { StyleSheet,  TouchableOpacity } from "react-native";
import React from "react";

import { colors } from "../../config/colors";
import RegularText from "../Texts/RegularText";


const DisabledButton = (props) => {
  return (
    
      <TouchableOpacity  style={[styles.container,props.style]}onPress={props.onPress} {...props}>
        <RegularText style={[{ color: colors.white }, { ...props?.textStyle }]}>
          {props.children}
        </RegularText>
      </TouchableOpacity>
  
  );
};

export default DisabledButton;
 
const styles = StyleSheet.create({
  container: {
    padding: 15,

    backgroundColor: colors.secondary,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 60,
    
  },
});
