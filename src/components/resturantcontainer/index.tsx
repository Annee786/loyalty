

import {StyleSheet,Text,,View,} from 'react-native';
import React from 'react';
import Image from '../../utils/images';
import { colors, fonts } from '../../utils';
import styles from '../../screens/splash/styles';

const ResturantContainer = ({heading}) => {
  return (

<View style={styles.resturants}>
<View style={styles.resturantImageView}>
  <Image
    style={styles.imageView}
    source={images.StarBucksResturants}
  />
</View>
<View style={styles.imageDiscriptionView}>
  <View style={styles.discriptionText}>
    <View style={styles.starbucksView}>
      <Text style={styles.resturantName}>Starbucks</Text>
      <Text style={styles.number}>4.5</Text>
    </View>
    <Text style={styles.subText}>Food & Beverages</Text>
    <View style={styles.checkInView}>
      <Text style={styles.checkinText}>
        Food & Check In to get Loyal
      </Text>
      <Image style={styles.arrowimage} source={images.ArrowRight} />
    </View>
  </View>
  <View style={styles.ratingView}></View>
</View>
</View> );
};

export default ResturantContainer;

const styles = StyleSheet.create({})
