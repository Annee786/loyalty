import {StyleSheet, TextInput, View, Text} from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils';

const InputButton = ({placeHolder, inputHeading}) => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.text}>{inputHeading}</Text>
            <View style={styles.container}>
        <TextInput
        placeholderTextColor={""}
        placeholder={placeHolder} style={styles.input} />
      </View>
    </View>
  );
};

export default InputButton;

const styles = StyleSheet.create({
  container: {
    borderColor:colors.inputColor,
    backgroundColor:colors.white,
    height: 50,
    width: '100%',
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
  },
  input: {
    colors:colors.inputColor,
    fontSize: 14,
  },
  text: {
    fontSize: 12,
   colors:colors.inputHeading,
   fontFamily:fonts.medium
  },
  inputBox:{
    paddingHorizontal:20,
    marginTop:15,

  }
});
