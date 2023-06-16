import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import SearchButton from '../../components/searchButton';

const LocationScreen = ({navigation}) => {
  return (
    <View style={styles.locationView}>
      <ScrollView>
        <Header heading="Location" subheading="Sign In" />
        <SearchButton placeHolder={'Dubai'} />
        <View style={styles.location}>
          <View style={styles.ImageView}>
            <Image style={styles.mappinImage} source={images.MapPin} />
            <Text style={styles.subtext}>Royal Ln. Mesa</Text>
          </View>
          <Text style={styles.locationDetails}>
            2464 Royal Ln. Mesa, New Jersey 45463
          </Text>
          <View style={styles.lineView} />
        </View>
      </ScrollView>
    </View>
  );
};

export default LocationScreen;
