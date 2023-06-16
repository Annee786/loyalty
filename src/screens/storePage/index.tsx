import React from 'react';
import {View,ScrollView,Image} from 'react-native';
import images from '../../utils/images';
import styles from './styles';
import Header from '../../components/header';



const StorePage = ({navigation}) => {
    return (
  <View>
  
  <ScrollView>

  <Header heading="Sign In"subheading="Creat an Account"/>
<View style={styles.imageView}>
<Image style={styles.imageview} source={images.StarBucks} />

</View>
<View style={styles.imageText}>
</View>


  </ScrollView>
</View>
  );
};

export default StorePage;