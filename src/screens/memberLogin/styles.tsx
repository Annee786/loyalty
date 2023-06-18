import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
  },
  box: {
    height: 450,
    width: '85%',
    borderColor: colors.grey,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'center',
  },
  mobilloginimage: {
    marginVertical: 20,
    resizeMode: 'contain',
    height: 180,
    width: 180,
    alignSelf: 'center',
  },
  textView: {flexDirection: 'row', alignItems: 'center'},
  tickbox: {
    height: 20,
    width: 20,
    borderColor: colors.inputColor,
    backgroundColor: colors.white,
    borderRadius: 2,
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 20,
  },
  text: {
    paddingLeft: 10,
    fontSize: 12,
    fontFamily: fonts.light,
    marginTop: 10,
    alignItems: 'center',
  },
  forgettTextView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  forgetText: {
    fontSize: 14,
    fontFamily: fonts.medium,
    colors: colors.button,
  },
});
