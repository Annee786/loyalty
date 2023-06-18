import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingHorizontal: 20,
  },

  box: {
    height: 160,
    width: '90%',
    borderColor: colors.boxcolor,
    backgroundColor: colors.boxcolor,
    borderRadius: 20,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerview: {
    flexDirection: 'row',
  },

  uploadimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  uploadtext: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.button,
    marginLeft: 10,
  },
  dotedline:{
    height: 140,
    width: '90%',
    borderColor: colors.pointstextcolor,
    borderRadius: 20,
    borderStyle:'dashed',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',

  }
});
