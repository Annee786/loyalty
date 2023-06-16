import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import SearchButton from '../../components/searchButton';
import BreadCrum from '../../components/breadCrum';
import StarRating from 'react-native-star-rating';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.welcomePageView}>
        <Header heading="Welcome Back !" />
        <View style={styles.card}>
          <View style={styles.pointsView}>
            <Text style={styles.earntext}>
              Earn and Redeem Rewards with a Simple Scan!
            </Text>
            <Text style={styles.scanText}>Scan it Now </Text>
            <View style={styles.earnpointstab}>
              <Text style={styles.text}>Earn Points</Text>
              <Image style={styles.arrowimage} source={images.ArrowRight} />
            </View>
          </View>
          <View style={styles.imageSection}>
            <Image style={styles.ewalletimage} source={images.EWallet} />
          </View>
        </View>
        <SearchButton placeHolder={'Search your places'} />

        <BreadCrum heading="Our Categories" subheading="View All" />

        <View style={styles.categoryBox}>
          <Image style={styles.imageView} source={images.FashionImage} />
          <Image style={styles.imageView} source={images.Resturants} />
          <Image style={styles.imageView} source={images.Groceries} />
          <Image style={styles.imageView} source={images.SuperMarket} />
        </View>
        <BreadCrum heading="Your Near By Restaurants"  />
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
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
