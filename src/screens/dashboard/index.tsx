import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import images from '../../utils/images';
import Header from '../../components/header';
import SearchButton from '../../components/searchButton';
import BreadCrum from '../../components/breadCrum';
import StarRating from 'react-native-star-rating';

const DashBoard = ({navigation}) => {
  const resturants=[
    {
      image:images.WadeWarren,
      name:'Wade Warren',
      date:'8 March ,2023',
      route:''
    },
    {
      image:images.JaneCooper,
      name:'Jane Cooper',
      date:'8 March ,2023',

      route:''
    },
    {
      image:images.RobertFox,
      name:'Robert Fox',
      date:'8 March ,2023',
      route:''
    },
    {
      image:images.Cameron,
      name:'Cameron Williamson',
      date:'8 March ,2023',
      route:''
    },
    {
      image:images.Cameron,
      name:'Cameron Williamson',
      date:'8 March ,2023',
      route:''
    },
  

  ]
  return (
    <ScrollView>
      <View style={styles.dashboardView}>
        <Header heading="Dashboard" subheading="Log out" />
        <View style={styles.card}>
          <View style={styles.pointsView}>
            <Text style={styles.earntext}>
              Earn and Redeem Rewards with a Simple Scan!
            </Text>
            <Text style={styles.scanText}>Scan it Now </Text>
            <View style={styles.earnpointstab}>
              <Text style={styles.text}>Earn Points</Text>
              <Image style={styles.arrowimage} source={images.ArrowRight} />
            </View>
          </View>
          <View style={styles.imageSection}>
            <Image style={styles.ewalletimage} source={images.EWallet} />
          </View>
        </View>
        <View style={styles.categoryBox}>
          <Image style={styles.imageView} source={images.FashionImage} />
          <Image style={styles.imageView} source={images.Resturants} />
          <Image style={styles.imageView} source={images.Groceries} />
          <Image style={styles.imageView} source={images.SuperMarket} />
        </View>
        <BreadCrum heading="Latest Points Transaction" />
        {resturants.map((item)=>{
        return(
<View style={styles.transactionView}>
<View style={styles.nameView}>
<Image style={styles.wadeimage} source={item.image} />
</View>
<View style={styles.TextView}>
<Text style={styles.nametext}>{item.name}</Text>
<Text style={styles.date}>{item.date}</Text>

</View>
              <View style={styles.pointsScoretab}>
                <Image style={styles.dollarimage} source={images.Dollars} />

                <Text style={styles.pointstext}>250+ points</Text>
              </View>
            </View>
  )
})}
</View>

    </ScrollView>
  );
};

export default DashBoard;
