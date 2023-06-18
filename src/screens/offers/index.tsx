import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';


const Offers = ({navigation,onPress}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.pageView}>
          <Header heading="Offers"/>
<View style={styles.offersView}>
<Image style={styles.imageView} source={images.WeekEndOffer} />
<Image style={styles.imageView} source={images.DailyOffer} />
<Image style={styles.imageView} source={images.EidOffer} />
<Image style={styles.imageView} source={images.WeekEndOffers} />


          
       </View>  
</View>

          </ScrollView>
    </View>
  );
};

export default Offers;