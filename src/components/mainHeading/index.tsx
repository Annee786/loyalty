import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { fonts,colors } from '../../utils';

const MainHeading = ({heading, subheading}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainheader}>{heading}</Text>
      <Text style={styles.text}>{subheading}</Text>
    </View>
  );
};

export default MainHeading;

const styles = StyleSheet.create({
  mainheader: {
    alignItems: 'center',
    fontSize: 16,
    justifyContent:'center',
    fontFamily:fonts.medium,
    colors:colors.header,
  },

  text: {
colors:colors.header,
    marginTop: 10,
    justifyContent:'center',
    alignItems: 'center',
  fontFamily:fonts.light,
    fontSize: 16,
  },
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 10,
  },
});
