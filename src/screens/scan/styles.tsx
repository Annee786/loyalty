import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 20,
  },
  michealpointsView: {
    height: 90,
    width: '85%',
    backgroundColor: colors.button,
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  michealimage: {
    height: '60%',
    width: '30%',
    resizeMode: 'contain',
    paddingLeft: 10,
  },
  name: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: colors.header,
    marginTop: 10,
  },
  pointsScoretab: {
    flexDirection: 'row',
    height: 30,
    width: '80%',
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
    marginTop:5
  },
  pointstext: {
    fontFamily: fonts.medium,
    fontSize: 10,
    color: colors.button,
    marginLeft: 5,
    marginTop:5
  },
  justnowtext: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.lightblue,

  },
  box: {
    flex: 1,
    height: 400,
    width: '90%',
    borderColor: colors.button,
    backgroundColor: colors.button,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 30,
  },
  qrimageView: {
    flex: 0.8,
    backgroundColor: colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  qrimage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  scantextView: {
    flex: 0.3,
    backgroundColor: colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  textscan: {
    fontFamily: fonts.semiBold,
    color: colors.white,
    fontSize: 14,
  },
});
