import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import SearchButton from '../../components/searchButton';
import BreadCrum from '../../components/breadCrum';
import StarRating from 'react-native-star-rating';

const HomeScreen = ({navigation}) => {
  const resturants=[
    {
      image:images.StarBucksResturants,
      name:'Starbucks',
      type:'Food & Beverages',
checkin:'Check In to get Loyal',
      route:''
    },
    {
      image:images.BurgerkingLogo,
      name:'Burger King',
      type:'Food & Dining',
checkin:'Check In to get Loyal',
      route:''
    },
    {
      image:images.WalmartLogo,
      name:'Walmart',
      type:'Supermarket',
checkin:'Check In to get Loyal',
      route:''
    },
    {
      image:images.AljadeedLogo,
      name:'Al Jadeed Super market',
      type:'Food & Beverages',
foodcheckin:'Check In to get Loyal',
      route:''
    },
    {
      image:images.DunkinLogo,
      name:'Dunkin Donut',
      type:'Food & Beverages',
foodcheckin:'Check In to get Loyal',
      route:''
    },
    {
      image:images.ChinggrilLogo,
      name:'China Grill',
      type:'Food & Beverages',
foodcheckin:'Check In to get Loyal',

      route:''
    },

  ]
  return (
    <ScrollView>
      <View style={styles.welcomePageView}>
        <Header heading="Welcome Back !" subheading="S13 , Downhill Road"/>
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
        {resturants.map((item)=>{
        return(
          <View style={styles.resturants}>
         
         <View style={styles.resturantImageView}>
            <Image
              style={styles.imageView}source={item.image}
            />
          </View>
          <View style={styles.imageDiscriptionView}>
            <View style={styles.discriptionText}>
              <View style={styles.starbucksView}>
                <Text style={styles.resturantName}>{item.name}</Text>
                <Text style={styles.number}>4.5</Text>
              </View>
              <Text style={styles.subText}>{item.type}</Text>
              <View style={styles.checkInView}>
                <Text style={styles.checkinText}>
                {item.foodcheckin}
                </Text>
                <Image style={styles.arrowimage} source={item.image} />
              </View>
            </View>
            <View style={styles.ratingView}></View>
          </View>
        </View>

        )
      })}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
