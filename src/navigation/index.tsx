import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash} from '../screens';
import GetStarted from '../screens/getStarted';
import SignUp from '../screens/signupDetails';
import SignupPassword from '../screens/signupPassword';
import ReadyToStart from '../screens/readyToStart';
import SignIn from '../screens/signIn';
import HomeScreen from '../screens/homescreen';
import StorePage from '../screens/storePage';
import Categories from '../screens/categories';
import LocationScreen from '../screens/locationScreen';
import LoyaltyPoints from '../screens/loyaltyPoints';
import ScanQRCode from '../screens/scanQRcode';
import SearchScreen from '../screens/searchScreen';
import SignUpDetails from '../screens/signupDetails';
import SettingsScreen from '../screens/settingsScreen';
import Profile from '../screens/profile';
import MemberLogin from '../screens/memberLogin';
import DashBoard from '../screens/dashboard';
import Scan from '../screens/scan';
import Points from '../screens/points';
import Uploads from '../screens/uploads';
import Offers from '../screens/offers';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="DashBoard">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignUpDetails" component={SignUpDetails} />
        <Stack.Screen name="SignupPassword" component={SignupPassword} />
        <Stack.Screen name="ReadyToStart" component={ReadyToStart} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="StorePage" component={StorePage} />
        <Stack.Screen name="ScanQRCode" component={ScanQRCode} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="LoyaltyPoints" component={LoyaltyPoints} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MemberLogin" component={MemberLogin} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Points" component={Points} />
        <Stack.Screen name="Uploads" component={Uploads} />
        <Stack.Screen name="Offers" component={Offers} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
