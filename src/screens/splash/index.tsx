import * as React from 'react';
import {View, Text,Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';

const Splash = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.ximage} source={images.XImage}/>
      <Text style={styles.text}>KHAIRAT</Text>
    </View>
  );
};

export default Splash;
