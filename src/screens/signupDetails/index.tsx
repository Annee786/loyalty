import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import Button from '../../components/button';
import MainHeading from '../../components/mainHeading';
import HeadingText from '../../components/headingText';
import InputButton from '../../components/inputButton';


const SignUpDetails = ({navigation,onPress}) => {
  return (
    <View style={styles.passwordAcountView}>
      <ScrollView>
        <Header heading="Create your Account" subheading="Sign In" />
        <Image style={styles.secureloginimage} source={images.MobileLoginimage} />
        <View style={styles.box}>
          <MainHeading heading="Add your Personal Details" />
          <HeadingText heading="Enter your details in order to directly contact and help to find you." />
          <InputButton inputHeading={'Full Name'} placeHolder={'John Doe'} />
          <InputButton inputHeading={'Email Address'} placeHolder={'JohnDoe@example.com'} />
          <InputButton inputHeading={'Contact Number'} placeHolder={'John Doe'} />
        </View>
        <Button
          onPress={() => navigation.navigate('GetStarted')}
          heading="Next "
        />
      </ScrollView>
    </View>
  );
};

export default SignUpDetails;
