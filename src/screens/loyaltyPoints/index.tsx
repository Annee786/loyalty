import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import Button from '../../components/button';

const LoyaltyPoints = ({navigation}) => {
  const resturantpoints=[
    {
      image:images.AljadeedLogo,
      name:'Burger King',
      type:'Date : 8 March , 2023',
points:'+ 150 Points',
      route:''
    }, {
      image:images.AljadeedLogo,
      name:'Al Jadeed Super market',
      type:'Date : 8 March , 2023',
      points:'+ 233 Points',
      route:''
    }, {
      image:images.AljadeedLogo,
      name:'Walmart',
      type:'Date : 8 March , 2023',
points:'+ 98 Points',
      route:''
    }, {
      image:images.AljadeedLogo,
      name:'Walmart',
      type:'Date : 8 March , 2023',
points:'+ 561 Points',
      route:''
    }, {
      image:images.AljadeedLogo,
      name:'Dunkin Donut',
      type:'Date : 8 March , 2023',
points:'+ 112 Points',
      route:''
    }, {
      image:images.AljadeedLogo,
      name:'Madinah Market',
      type:'Date : 8 March , 2023',
points:'+ 100 Points',
      route:''
    }, {
      image:images.AljadeedLogo,
      name:'Starbucks',
      type:'Date : 8 March , 2023',
points:'+ 200 Points',
      route:''
    }, 
     
  ]


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

      {resturantpoints.map((item)=>{
        return(
<View style={styles.resturantsView}>
          <View style={styles.ImageView}>
            <Image style={styles.mappinImage} source={item.image} />
            <Text style={styles.subtext}>{item.name}</Text>
          </View>
          <Text style={styles.dateHistory}>
         {item.type}
          </Text>
          <Text style={styles.totalpoints}>{item.points}</Text>
        </View>

)
})}
        <Button
          onPress={() => navigation.navigate('Favorites')}
          heading="Redeem points"
        />


    </View>
  );
};

export default LoyaltyPoints;
