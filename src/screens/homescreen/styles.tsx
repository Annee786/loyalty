import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  welcomePageView: {flex: 1,
     backgroundColor: colors.backgroundColor,
    paddingHorizontal:20},

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
    width: '60%',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    colors: colors.white,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: fonts.light,
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
  card: {
    height: 190,
    width: '90%',
    backgroundColor: colors.button,
    borderRadius: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 10,
  },
  pointsView: {
    flex: 1.5,
    backgroundColor: colors.button,
    height: '100%',
    borderRadius: 20,
    borderColor: colors.button,
    borderWidth: 1,
  },
  imageSection: {
    flex: 1.1,
    backgroundColor: colors.button,
    height: '100%',
    borderRadius: 20,
    borderColor: colors.button,
    borderWidth: 1,
  },
  scanText: {
    fontSize: 12,
    colors: colors.white,
    marginTop: 10,
    fontFamily: fonts.light,
  },
  categoryBox: {
    height: 50,
    width: '20%',
    flexDirection: 'row',
    marginBottom: 30,
    
  },
  imageView: {
    height: 80,
    width: '100%',
    resizeMode: 'contain',
    marginRight: 10,
    marginBottom: 20,
  },

  resturants: {
    flexDirection: 'column',
    borderColor: colors.white,
    marginBottom:20,
    borderWidth: 1,
    height: 150,
    width: '50%',
    marginLeft: 10,
    borderRadius: 10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  resturantImageView: {
    flex: 1.5,
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 1,
  },
  imageDiscriptionView: {
    flex: 1.1,
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 1,
  },
  discriptionText: {
    flex: 1.1,
  },
  starbucksView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  number: {
    color: colors.header,
    fontSize: 12,
  },
  ratingView: {
    flex: 1.2,
  },
  resturantName: {
    fontSize: 12,
    color: colors.header,
    paddingLeft: 5,
    fontFamily: fonts.medium,
  },
  subText: {
    fontSize: 10,
    colors: colors.TextColor,
    fontFamily: fonts.light,
  },
  checkInView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkinText: {
    fontSize: 10,
    colors: colors.button,
    fontFamily: fonts.light,
    padding: 5,
  },
});
