import {StyleSheet} from 'react-native';
import { colors,fonts } from '../../utils';


export default StyleSheet.create({
    storePageView:{flex:1,
        backgroundColor:colors.backgroundColor,
        paddingHorizontal:20
      },
imageView:{ 
    height:150,
    width:'100%',
    borderRadius:10,
    borderColor:colors.white,
     marginTop:20,
    alignItems:'center',
justifyContent:'center'},
   
imageview:{
    height:'100%',
    width:'80%',
    resizeMode:'contain',

},
    
    imageText:{},
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
      arrowimage: {
        resizeMode: 'contain',
        height: 20,
        marginTop: 5,
        width: 15,
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
    });
