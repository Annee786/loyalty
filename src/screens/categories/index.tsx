import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import images from '../../utils/images';
import styles from './styles';
import Header from '../../components/header';
import BreadCrum from '../../components/breadCrum';

const Categories = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <Header heading="Categories" subheading="Signin" />

        <View style={styles.categoryBox}>
          <Image style={styles.imageView} source={images.FashionImage} />
          <Image style={styles.imageView} source={images.Resturants} />
          <Image style={styles.imageView} source={images.Groceries} />
          <Image style={styles.imageView} source={images.SuperMarket} />
        </View>
        <BreadCrum heading="Restaurants" subheading="140 results" />
      </ScrollView>
    </View>
  );
};

export default Categories;
