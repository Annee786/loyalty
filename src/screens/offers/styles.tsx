import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal:20,
  },
  offersView:{
height:'100%',
width:'100%',
marginTop:20,

  },
  imageView:{
resizeMode:'contain',
height:100,
width:'100%',
marginTop:20

  }


})