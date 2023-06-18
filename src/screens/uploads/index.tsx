import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import Button from '../../components/button';
import MainHeading from '../../components/mainHeading';
import InputButton from '../../components/inputButton';
import HeadingText from '../../components/headingText';

const Uploads = ({navigation, onPress}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.pageView}>
          <Header heading="Upload " />
          <View style={styles.box}>
            <View style={styles.centerview}>
              <View style={styles.dotedline}>
                <Image style={styles.uploadimage} source={images.Upload} />
                <Text style={styles.uploadtext}>Upload Image</Text>
              </View>
            </View>
          </View>
          <InputButton inputHeading={'Offer Title'} placeHolder={'Offer Title'} />
          <InputButton inputHeading={'Valid Date till'} placeHolder={'mm/dd//yy'} />
          <InputButton inputHeading={'Points'} placeHolder={'0- 1000 points'} />
          <InputButton inputHeading={'Available Location'} placeHolder={'Enter the location '} />

          <Button
          onPress={() => navigation.navigate('Offers')}
          heading="Upload"
        />
        </View>
      </ScrollView>
    </View>
  );
};

export default Uploads;
