import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  container: 
  {flex: 1,
     backgroundColor: colors.backgroundColor},

  textView:{
paddingHorizontal:20,
  },
  text:{
    fontFamily:fonts.light,
    fontSize:12,
    colors:colors.TextColor,
    paddingHorizontal:20,
    marginTop:20
  }
,  
  currencypana: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  currencyimage: {
    alignSelf: 'center',
    marginVertical: 20,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  haveanaccount: {
    colors:colors.TextColor,
    fontSize: 14,
    paddingLeft: 65,
  },
  signintext: {
    colors:colors.button,
    fontSize: 14,
    fontFamily:fonts.light
  },
});
