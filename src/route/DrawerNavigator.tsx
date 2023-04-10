import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from './StackNavigator';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="history"
        screenOptions={{
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: '#fff',
        }}
    >
      <Drawer.Screen name="MainPage" component={StackNavigator} options={{drawerLabel: 'MainPage'}} />
      {/* <Drawer.Screen name="About" component={About} options={{drawerLabel: 'ABOUT'}} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;