import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from './StackNavigator';
import DrawerCustom from '../components/DrawerCustom'
import {StatusBar, StyleSheet, TouchableOpacity, SafeAreaView, Text, View, Image, ScrollView, RefreshControl, Pressable, BackHandler, Alert, Dimensions, Button} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Drawer = createDrawerNavigator();
const width = Dimensions.get("screen").width;
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            width: wp(57),
          },
          drawerPosition:"right"}}
        drawerContent={({navigation}) => (
              <SafeAreaView>
                <DrawerCustom navigation = {navigation}></DrawerCustom>
              </SafeAreaView>
          )}
    >
      <Drawer.Screen name="aaa" component={StackNavigator} options={{ headerShown: false }}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;