import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  locationView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },

  location: {
    height: 70,
    width: '80%',
    marginTop: 20,
    paddingLeft: 10,
  },

  ImageView: {
    paddingLeft: 10,
    flexDirection: 'row',
  },

  mappinImage: {
    height: 20,
    width: 20,
    marginTop: 10,
  },
  subtext: {
    fontSize: 14,
    colors: colors.darkBlack,
    paddingLeft: 10,
    fontFamily: fonts.medium,
  },
  locationDetails: {
    colors: colors.darkGrey,
    fontFamily: fonts.light,
    fontSize: 10,
    paddingLeft: 40,
  },
  lineView: {
    height: 1,
    width: '100%',
    paddingHorizontal: 10,
    borderColor:colors.darkLine,
    borderWidth: 1,
    marginTop: 10,
  },
});
