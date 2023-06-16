import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import Button from '../../components/button';
import MainHeading from '../../components/mainHeading';
import InputButton from '../../components/inputButton';
import HeadingText from '../../components/headingText';

const SignIn = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.pageView}>
          <Header heading="Sign In" subheading="Creat an Account" />
        </View>
        <Image style={styles.mobilloginimage} source={images.MobileLoginpana} />
        <View style={styles.box}>
          <MainHeading heading="Welcome Back" />
          <HeadingText heading="Enter your Email address and password to login and continue our app." />
          <InputButton
            inputHeading={'Email Address'}
            placeHolder={'JohnDoe@example.com'}
          />
          <InputButton
            inputHeading={'Password'}
            placeHolder={'****************'}
          />
          <View style={styles.textView}>
            <View style={styles.tickbox}></View>
            <Text style={styles.text}>Remember me</Text>
          </View>
<View style={styles.forgettTextView}>
<Text style={styles.forgetText}>Forgot Password ?</Text>
</View>

        </View>
        <View>
          <Button
            onPress={() => navigation.navigate('LocationScreen')}
            heading="Log In"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;
