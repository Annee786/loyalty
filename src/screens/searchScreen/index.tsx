import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import SearchButton from '../../components/searchButton';
import HeadingText from '../../components/headingText';
import BreadCrum from '../../components/breadCrum';

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.searchView}>
      <Header heading="Scan QR Code" />
      <SearchButton placeHolder={'Search your places'} />
      <BreadCrum heading="Recently searched" />
      <View style={styles.resturantsearchView}>
        <Image style={styles.searchImage} source={images.Search} />
        <Text style={styles.resturantname}>Burger King</Text>
        <Image style={styles.xImage} source={images.Ximage} />
      </View>
      <View style={styles.resturantsearchView}>
        <Image style={styles.searchImage} source={images.Search} />
        <Text style={styles.resturantname}>Al Jadeed Super market</Text>
        <Image style={styles.xImage} source={images.Ximage} />
      </View>
    </View>
  );
};

export default SearchScreen;
