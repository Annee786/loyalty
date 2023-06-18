import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import Button from '../../components/button';
import MainHeading from '../../components/mainHeading';
import HeadingText from '../../components/headingText';
import InputButton from '../../components/inputButton';


const SignupPassword = ({navigation,onPress}) => {
  return (
    <View style={styles.passwordAcountView}>
      <ScrollView>
        <Header heading="Create your Account" subheading="Sign In" />
        <Image style={styles.secureloginimage} source={images.SecureLogin} />
        <View style={styles.box}>
<MainHeading heading='Set Your Password'/>
<HeadingText heading='In order to keep your account safe you need  to create a strong password.'/>
<InputButton inputHeading={'Password'} placeHolder={'**************'} />
          <InputButton inputHeading={'Confirm Password'} placeHolder={'**************'} />
<Text style={styles.discription}>YOUR PASSWORD MUST CONTAIN :</Text>

<Text style={styles.discriptionpoints}>At least 8 Characters</Text>
<Text style={styles.discriptionpoints}>1  or more uppercase letter</Text>

        </View>
        <Button
          onPress={() => navigation.navigate('ReadyToStart')}
          heading="Next "
        />
      </ScrollView>
    </View>
  );
};

export default SignupPassword;
