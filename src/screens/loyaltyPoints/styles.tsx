import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  loyaltypointsView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 20,
  },
  pointsCard: {
    height: 150,
    width: '90%',
    backgroundColor: colors.button,
    borderRadius: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 10,
  },
  pointsView: {
    flexDirection: 'column',
  },
  points: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 30,
  },
  pointstext: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: fonts.light,
  },
  historyview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  monthView: {
    marginTop: 10,
    height: 30,
    width: '28%',
    borderColor: colors.button,
    backgroundColor: colors.lightgrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginRight: 20,
  },
  monthText: {
    colors: colors.lightblack,
    fontSize: 12,
  },
  view: {
    flexDirection: 'row',
  },
  imageView: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  subHeading: {
    fontSize: 14,
    fontFamily: fonts.medium,
    colors: colors.header,
    marginTop: 10,
    marginLeft: 10,
  },

  historyPointsView: {},
  resturantsView: {
    height: 70,
    width: '90%',
    marginTop: 20,

    borderBottomWidth: 1,
    borderBottomColor: colors.lineprofile,
  },

  ImageView: {
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
  dateHistory: {
    colors: colors.darkGrey,
    fontFamily: fonts.light,
    fontSize: 10,
    paddingLeft: 30,
  },

  totalpoints: {
    fontSize: 14,
    colors: colors.button,
    alignSelf: 'flex-end',

  },
});
