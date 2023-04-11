import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from './StackNavigator';
import MainPage from '../screens/MainPage'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        initialRouteName="Home"
    >
      <Drawer.Screen name="aaa" component={StackNavigator} options={{ headerShown: false }}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;