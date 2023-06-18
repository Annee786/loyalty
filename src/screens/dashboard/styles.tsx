import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  dashboardView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 20,
  },
  arrowimage: {
    resizeMode: 'contain',
    height: 20,
    marginTop: 5,
    width: 15,
  },

  earnpointstab: {
    flexDirection: 'row',
    borderColor: colors.white,
    backgroundColor: colors.white,
    height: 30,
    width: '70%',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 5,
  },
  text: {
    colors: colors.white,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: fonts.light,
    paddingRight: 5,
  },

  card: {
    height: 190,
    width: '90%',
    borderColor: colors.backgroundColor,
    backgroundColor: colors.button,
    borderRadius: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  pointsView: {
    flex: 1.5,
    backgroundColor: colors.button,
    height: '100%',
    width: '100%',
    borderRadius: 20,
    borderColor: colors.button,
    borderWidth: 1,
  },
  imageSection: {
    flex: 1.3,
    backgroundColor: colors.button,
    height: '100%',
    borderRadius: 20,
    borderColor: colors.button,
    borderWidth: 1,
  },
  scanText: {
    fontSize: 12,
    colors: colors.white,
    fontFamily: fonts.light,
    marginLeft: 5,
  },
  ewalletimage: {
    resizeMode: 'contain',
    height: '100%',
    width: 150,
    paddingHorizontal: 5,
  },
  earntext: {
    colors: colors.white,
    fontSize: 16,
    alignSelf: 'center',
    paddingLeft: 5,
    paddingTop: 5,
    fontFamily: fonts.medium,
  },
  categoryBox: {
    height: 60,
    width: '70%',
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 10,
  },
  imageView: {
    height: 80,
    width: '30%',
    resizeMode: 'contain',
    marginRight: 10,
    marginBottom: 20,
  },
  transactionView: {
    flexDirection: 'row',
    flex: 2,
    height: 70,
    width: '95%',
    borderColor: colors.button,
    backgroundColor: colors.button,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginLeft:10,
    marginTop:10
  },
  nameView: {
    flex: 0.2,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  TextView: {
    flex: 0.4,
    flexDirection: 'column',
    paddingLeft: 10,
  },
  nametext: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.header,
    marginTop: 10,
  },

  date: {
    color: colors.pointstextcolor,
    fontFamily: fonts.light,
    fontSize: 10,
  },

  pointsScoretab: {
    flexDirection: 'row',
    flex: 0.4,
    height: 30,
    width: '100%',
    borderColor: colors.white,
    borderRadius: 25,
    backgroundColor: colors.white,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wadeimage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },

  dollarimage: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  pointstext: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: colors.button,
    marginLeft: 5,

    textAlign: 'center',
  },
});
