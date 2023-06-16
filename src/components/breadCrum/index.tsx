import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../utils/images';
import { colors, fonts } from '../../utils';

const BreadCrum= ({heading, subheading}: any) => {
  return (
    <View style={styles.container}>

      <Text style={styles.mainHeading}>{heading}</Text>
      <Text style={styles.sideHeading}>{subheading}</Text>
    </View>
  );
};

export default BreadCrum;

const styles = StyleSheet.create({
  mainHeading: {
    alignItems: 'center',
fontFamily:fonts.medium,
colors:colors.header,
    fontSize: 14,
  },  
  sideHeading: {
colors:colors.button,
    fontSize: 14,
    fontFamily:fonts.medium

  },
  container: {
    flexDirection: 'row',
    marginBottom:10,
    alignItems: 'center',
    marginTop:20,
    justifyContent:'space-between',
    marginHorizontal:10
  },
});
