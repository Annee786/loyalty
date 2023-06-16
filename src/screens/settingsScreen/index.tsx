import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import HeadingText from '../../components/headingText';
import MainHeading from '../../components/mainHeading';

const SettingsScreen = ({navigation}) => {
const settings=[
  {
    name:'Edit Profile',
    image:images.User,
    route:''
  },
  {
    name:'Push Notifications',
    image:images.AlertCircle,
    route:''
  },
  {
    name:'Privacy & Policy',
    image:images.User,
    route:''
  },
  {
    name:'Terms & Conditions',
    image:images.User,
    route:''
  },
  {
    name:'About',
    image:images.User,
    route:''
  },
]
  return (
    <ScrollView>
      <View style={styles.welcomePageView}>
        <Header heading="Settings" />
        <View style={styles.pointsCard} />
        <View style={styles.circleView}>
          <Image style={styles.johnimage} source={images.JohnDoeImage} />
        </View>
        <MainHeading heading="John Doe" />
        <Text style={styles.idtext}>JohnDoe@gmail.com</Text>
        {settings.map((item)=>{
          return(
            <View style={styles.settingView}>
            <View style={styles.profileview}>
              <Image style={styles.userimage} source={item.image} />
              <Text style={styles.idtext}>{item.name}</Text>
            </View>
  
            <Image style={styles.arrowview} source={images.ForwardArrow} />
          </View>
          )
        })}
      

      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
