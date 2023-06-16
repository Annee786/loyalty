import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  textView: {
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: fonts.light,
    fontSize: 12,
    colors: colors.TextColor,
    paddingHorizontal: 20,
    marginTop: 20,
  },

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
    marginTop: 50,
  },
  haveanaccount: {
    color: '#999292',
    fontSize: 14,
    paddingLeft: 65,
  },
  signintext: {
    color: '#3F7DC8',
    fontSize: 14,
  },
});
