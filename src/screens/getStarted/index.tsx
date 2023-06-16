import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import MainHeader from '../../components/mainHeading';
import SubText from '../../components/subText';
import Button from '../../components/button';

const GetStarted = ({navigation, onPress}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.currencyimage} source={images.CurrencyPana} />
      <MainHeader
        heading="Join us today and earn 
loyalty points !"
      />
<View style={styles.textView}>
  <Text style={styles.text}>Purchase food from your favorite restaurants and earn points that can be redeemed for exclusive offers !</Text>
  </View>   
 <Button
        onPress={() => navigation.navigate('SignUpDetails')}
        heading="Get Started"
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.haveanaccount}>Already have an account ?</Text>
        <Text style={styles.signintext}>Sign In</Text>
      </View>
    </View>
  );
};

export default GetStarted;
