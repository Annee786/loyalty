import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  welcomePageView: {flex: 1, backgroundColor: colors.backgroundColor},
  pointsCard: {
    height: 160,
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
  circleView: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: colors.white,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
 marginTop:-40,
 alignSelf:'center'
  },
  johnimage: {
    height: '90%',
    width: '90%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  idtext: {
    justifyContent: 'flex-end',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.medium,
    colors: colors.lightblue,
    marginLeft:5
  },
  settingView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal:20,
    borderBottomWidth:1,
    borderBottomColor:colors.lineprofile,
    paddingBottom:10
  },

  userimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  arrowview: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
 
  profileview:{
flexDirection:'row',
alignItems:'center',

  }
});
