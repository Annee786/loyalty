import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import MainHeading from '../../components/mainHeading';
import InputButton from '../../components/inputButton';

const Profile = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.profileView}>
        
        <Header heading="Profile" />
        <View style={styles.profilepic}>
          <Image style={styles.johnimage} source={images.JohnDoeImage} />

          <MainHeading heading="John Doe" />
          <Text style={styles.idtext}>JohnDoe@gmail.com</Text>
          <View style={styles.lineView} />
        </View>
        <InputButton inputHeading={'Full Name'} placeHolder={'John Doe'} />
        <InputButton
          inputHeading={'Email Address'}
          placeHolder={'JohnDoe@example.com'}
        />
        <InputButton
          inputHeading={'Contact Number'}
          placeHolder={'123 123 134 123'}
        />
        <InputButton inputHeading={'Password'} placeHolder={'**********'} />
      </View>
    </ScrollView>
  );
};

export default Profile;
