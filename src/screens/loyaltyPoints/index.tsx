import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import Button from '../../components/button';

const LoyaltyPoints = ({navigation}) => {
  return (
    <View style={styles.loyaltypointsView}>
      <Header heading="Loyalty Points" />
      <View style={styles.pointsCard}>
        <View style={styles.pointsView}>
          <Text style={styles.points}>1500</Text>

          <Text style={styles.pointstext}>Your Total Points</Text>
        </View>
      </View>
      <View style={styles.historyview}>
        <Text style={styles.subHeading}>Points History</Text>
        <View style={styles.monthView}>
          <View style={styles.view}>
            <Text style={styles.monthText}>This Month</Text>
            <Image style={styles.imageView} source={images.ArrowDown} />
          </View>
        </View>
      </View>
<View style={styles.resturantsView}>
          <View style={styles.ImageView}>
            <Image style={styles.mappinImage} source={images.MapPin} />
            <Text style={styles.subtext}>Burger King</Text>
          </View>
          <Text style={styles.dateHistory}>
          Date : 8 March , 2023
          </Text>
          <Text style={styles.totalpoints}>+ 150 Points</Text>
          <View style={styles.lineView} />
        </View>
        <Button
          onPress={() => navigation.navigate('Favorites')}
          heading="Redeem points"
        />


    </View>
  );
};

export default LoyaltyPoints;
