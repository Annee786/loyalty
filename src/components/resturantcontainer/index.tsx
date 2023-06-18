

import {StyleSheet,Text,View,} from 'react-native';
import React from 'react';
import images from '../../utils/images';
import { colors, fonts, Image,} from '../../utils';
import styles from '../../screens/splash/styles';

const ResturantContainer = () => {
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

const styles = StyleSheet.create({


    storePageView:{flex:1,
        backgroundColor:colors.backgroundColor,
        paddingHorizontal:20
      },
imageView:{ 
    height:150,
    width:'100%',
    borderRadius:10,
    borderColor:colors.white,
     marginTop:20,
    alignItems:'center',
justifyContent:'center'},
   
imageview:{
    height:'100%',
    width:'80%',
    resizeMode:'contain',

},
    
    imageText:{},
    imageDiscriptionView: {
        flex: 1.1,
        backgroundColor: colors.white,
        height: '100%',
        width: '100%',
        borderRadius: 10,
        borderColor: colors.white,
        borderWidth: 1,
      },
      discriptionText: {
        flex: 1.1,
      },
      starbucksView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      number: {
        color: colors.header,
        fontSize: 12,
      },
      ratingView: {
        flex: 1.2,
      },
      resturantName: {
        fontSize: 12,
        color: colors.header,
        paddingLeft: 5,
        fontFamily: fonts.medium,
      },
      subText: {
        fontSize: 10,
        colors: colors.TextColor,
        fontFamily: fonts.light,
      },
      checkInView: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      checkinText: {
        fontSize: 10,
        colors: colors.button,
        fontFamily: fonts.light,
        padding: 5,
      },
      arrowimage: {
        resizeMode: 'contain',
        height: 20,
        marginTop: 5,
        width: 15,
      },
      resturants: {
        flexDirection: 'column',
        borderColor: colors.white,
        marginBottom:20,
        borderWidth: 1,
        height: 150,
        width: '50%',
        marginLeft: 10,
        borderRadius: 10,
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
      },
      resturantImageView: {
        flex: 1.5,
        backgroundColor: colors.white,
        height: '100%',
        width: '100%',
        borderRadius: 10,
        borderColor: colors.white,
        borderWidth: 1,
      },
    });

})
