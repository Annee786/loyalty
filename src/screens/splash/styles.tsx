import { StyleSheet } from "react-native";
import { colors, fonts } from "../../utils";

export default StyleSheet.create({
    container:{
backgroundColor:colors.backgroundColor,
flex:1,
alignItems:'center',
justifyContent:'center',
    },
text:{
    fontSize:30,
colors:colors.white,
fontFamily:fonts.bold
},
ximage:{
    width: 200,
    height: 200,
    resizeMode: 'contain',  
}
})