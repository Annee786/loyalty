import React from 'react';
import {View,ScrollView,Text,Image} from 'react-native';
import images from '../../utils/images';
import styles from './styles';
import Header from '../../components/header';
import Button from '../../components/button';



const StorePage = ({navigation,onPress}) => {
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
  <View style={styles.storePageView}>
  <Header heading="Sign In"subheading="Creat an Account"/>
<View style={styles.imageView}>
<Image style={styles.imageview} source={images.StarBucksResturants} />

</View>
<View style={styles.imageText}>
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
            </View>
            </View>
                )
              })}

              
              </View>
              </View>
            </ScrollView>
          );
        };
    
export default StorePage;