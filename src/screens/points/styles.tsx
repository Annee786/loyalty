import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal:20
  },

  box: {
    flex: 1,
    height: 400,
    width: '90%',
    borderColor: colors.boxcolor,
    backgroundColor: colors.lightgrey,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 30,
  },
  pointstabView: {
    flex: 0.25,
    backgroundColor: colors.boxcolor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  entertextview: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.boxcolor,
  },
  pointsView: {
    flex: 0.25,
    backgroundColor: colors.boxcolor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flex: 0.25,
    backgroundColor: colors.boxcolor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsScoretab: {
    flexDirection: 'row',
    height: 40,
    width: '45%',
    borderColor: colors.white,
    borderRadius: 25,
    backgroundColor: colors.white,
    marginTop: 10,
    justifyContent: 'center',
  },
  dollarimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginTop: 10,
  },
  pointstext: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.button,
    marginLeft: 5,
    marginTop: 10,
  },
  entertext: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.header,
  },
  inputpointsView: {
    height: 50,
    width: '80%',
    borderColor: colors.boxcolor,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: colors.white,
  },
  points: {
    color: colors.pointstextcolor,
    fontFamily: fonts.light,
    fontSize: 14,
    paddingLeft: 20,
    marginTop: 10,
  },
});
