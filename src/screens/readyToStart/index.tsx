import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import MainHeader from '../../components/mainHeading';
import SubText from '../../components/subText';
import Button from '../../components/button';

const ReadyToStart = ({navigation}) => {
  return (
    <View style={styles.pageView}>
      <Image style={styles.currencyimage} source={images.SavingMoney} />
      <MainHeader heading="You Are Ready to Start! " />
      <View style={styles.textView}>
        <Text style={styles.text}>
          Thankyou for sign in into our app. You can now shop from your favorite
          places and earn points in your account.
        </Text>
      </View>
      <Button
        onPress={() => navigation.navigate('SignIn')}
        heading="Get Started"
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.haveanaccount}>Already have an account ?</Text>
        <Text style={styles.signintext}>Sign In</Text>
      </View>
    </View>
  );
};

export default ReadyToStart;
