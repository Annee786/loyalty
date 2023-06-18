import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import Button from '../../components/button';
import InputButton from '../../components/inputButton';
import MainHeading from '../../components/mainHeading';
import HeadingText from '../../components/headingText';
const MemberLogin = ({navigation,onPress}) => {
    return (
      <View>
        <ScrollView>
          <View style={styles.pageView}>
            <Header heading="Sign In"/>
          </View>
            <Image style={styles.mobilloginimage} source={images.MobileLoginimage} />
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
            onPress={() => navigation.navigate('DashBoard')}
            heading="Log In"
          />
      
            </View>
    </ScrollView>
    </View>
  );
};

export default MemberLogin;