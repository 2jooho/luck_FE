import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from '../screens/Main';
import MainPage from '../screens/MainPage'
import CateList from '../screens/CateList';
import CateList3 from '../screens/CateList3'
import PureLuckMain from '../screens/PureLuckMain'
import Login from '../screens/Login'
import Join2 from '../screens/Join2'
import FirstLoading from '../screens/FirstLoading'
import Mypage from '../screens/Mypage'
import MyStar from '../screens/MyStar'
import Profile from '../screens/Profile'
import FindId from '../screens/FindId'
import FindFinish from '../screens/FindFinish'

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="FirstLoading"
            component={FirstLoading}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
            name="MainPage"
            component={MainPage}
            
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
            name="Join2"
            component={Join2}
            options={{
                headerShown: false,
            }}
            />
            
            <Stack.Screen
            name="CateList3"
            component={CateList3}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
            name="PureLuckMain"
            component={PureLuckMain}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
            name="Mypage"
            component={Mypage}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
            name="MyStar"
            component={MyStar}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
            name="FindId"
            component={FindId}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen
            name="FindFinish"
            component={FindFinish}
            options={{
                headerShown: false,
            }}
            />
            
      </Stack.Navigator>
    );
      
}

export default StackNavigator;