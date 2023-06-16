import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  profileView: {flex: 1, backgroundColor: colors.backgroundColor},

  idtext: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.medium,
    colors: colors.lightblue,
   
  },
  johnimage: {
    height:'100%',
    width: '100%',
    resizeMode: 'contain',
  },
  profilepic: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop:40,
    marginBottom:50,
    height:90,
    width:'60%'

  },
  lineView: {
   height: 1,
   width:160,
   borderColor:colors.darkLine,
   borderWidth: 1,
   justifyContent:'center',
   alignSelf:'center',
 }, 
});
