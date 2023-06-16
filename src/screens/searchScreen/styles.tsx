import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  searchView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  resturantsearchView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  searchImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  resturantname: {
    colors: colors.darkBlack,
    fontFamily: fonts.light,
    fontSize: 14,
    paddingLeft: 10,
  },
  xImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});
