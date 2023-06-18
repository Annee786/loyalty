import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import Button from '../../components/button';

const Scan = ({navigation, onPress}) => {
  return (
    <ScrollView>
      <View style={styles.pageView}>
        <Header heading="Scan"/>

        <View style={styles.michealpointsView}>
          <Image style={styles.michealimage} source={images.Micheal} />
          <View>
            <Text style={styles.name}>Micheal George</Text>
            <View style={styles.pointsScoretab}>
              <Image style={styles.dollarimage} source={images.Dollars} />

              <Text style={styles.pointstext}>250+ points</Text>
            </View>
            <Text style={styles.justnowtext}>Just now</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.scantextView}>
            <Text style={styles.textscan}>
              Scan QR Codes, Collect Points, and Reap the Benefits!
            </Text>
          </View>
          <View style={styles.qrimageView}>
            <Image style={styles.qrimage} source={images.QRCodeImage} />
          </View>
        </View>
        <Button
          onPress={() => navigation.navigate('Points')}
          heading="Accept Scan "
        />
      </View>
    </ScrollView>
  );
};

export default Scan;
