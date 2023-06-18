import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../utils/images';
import { colors, fonts } from '../../utils';

const Header = ({heading, subheading}: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.arrowimage} source={images.ArrowLeft} />

      <Text style={styles.mainheader}>{heading}</Text>
      <Text style={styles.sideHeader}>{subheading}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainheader: {
    alignItems: 'center',
colors:colors.header,
    fontSize: 16,
    fontFamily:fonts.bold,
    paddingLeft:10
  },

  arrowimage: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },
  sideHeader: {
colors:colors.button,
    fontSize: 16,
    alignItems:'center',
    fontFamily:fonts.bold,
    paddingLeft:60
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10,
    paddingHorizontal:20,

  },
});
