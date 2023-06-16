import {StyleSheet, Text, TouchableOpacity,} from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils';

const Button = ({heading,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.inputText}>{heading}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.button,
    fontFamily:fonts.light,
    height: 50,
    width: '65%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  marginTop:30,
  marginBottom:30
  },
  inputText: {
    colors:colors.white,
    fontSize: 14,
    fontFamily:fonts.medium
  },
});
