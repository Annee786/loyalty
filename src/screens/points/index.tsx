import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import Button from '../../components/button';
import MainHeading from '../../components/mainHeading';
import InputButton from '../../components/inputButton';
import HeadingText from '../../components/headingText';

const Points = ({navigation, onPress}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.pageView}>
          <Header heading="Points" />
          <View style={styles.box}>
            <View style={styles.pointstabView}>
              <View style={styles.pointsScoretab}>
                <Image style={styles.dollarimage} source={images.Dollars} />

                <Text style={styles.pointstext}>250+ points</Text>
              </View>
            </View>
            <View style={styles.entertextview}>
<Text style={styles.entertext}>Enter the Points</Text>

            </View>
            <View style={styles.pointsView}>
              <View style={styles.inputpointsView}>
<Text style={styles.points}>$ 0-1000 points</Text>

              </View>
            </View>
            <View style={styles.buttonView}>
            <Button
          onPress={() => navigation.navigate('Uploads')}
          heading="Continue "
        />

            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Points;
