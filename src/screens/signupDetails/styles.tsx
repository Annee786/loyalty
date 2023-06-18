import {StyleSheet} from 'react-native';
import { colors } from '../../utils';

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
    borderColor:colors.white,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'center',
  },
  
});