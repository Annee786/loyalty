import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { colors, fonts } from '../../utils';

const HeadingText= ({heading}: any) => {
  return (
    <View style={styles.textView}>
      <Text style={styles.text}>{heading}</Text>
    </View>
  );
};

export default HeadingText;

const styles = StyleSheet.create({
  text: {
    color: colors.grey,
    marginTop: 10,
    fontSize: 12,
    fontFamily:fonts.light
  },
  textView: {
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 10,
    marginBottom: 20,
  },
});
