import {StyleSheet} from 'react-native';
import { colors,fonts } from '../../utils';

export default StyleSheet.create({
  passwordAcountView:{flex:1,
  backgroundColor:colors.backgroundColor
},
secureloginimage:{
    alignSelf: 'center',
    marginVertical: 20,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  box: {
    height: 450,
    width: '85%',
    borderColor:colors.grey,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'center',
  },
  discription:{
colors:colors.TextColor,
fontFamily:fonts.light,
fontSize:12,
paddingLeft:20,
marginTop:10,
  },
  discriptionpoints:{colors:colors.TextColor,
    fontFamily:fonts.light,
  fontSize:12,
  paddingLeft:20,
  marginTop:10

  }
});