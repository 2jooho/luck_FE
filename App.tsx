// import React from 'react';
// import Main from './src/screens/Main';
// import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// // import CateList from './src/screens/CateList';

// interface Props {}
// interface State {}

// const Stack = createStackNavigator();

// function App() {
//   return (
// <NavigationContainer>
//   <Stack.Navigator initialRouteName="main">
//     <Stack.Screen name="main" component={Main} />
//   </Stack.Navigator>
// </NavigationContainer>
//   );
// }

// export default App;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './src/screens/Main';
import MainPage from './src/screens/MainPage'
import CateList from './src/screens/CateList';
import CateList2 from './src/screens/CateList2'
import PureLuckMain from './src/screens/PureLuckMain'
import Login from './src/screens/Login'
import {useEffect, useState} from 'react';
import * as Font from 'expo-font';
import {Text, View, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

//import 목록
//npm install -save axios
// npm i react-native-responsive-screen
// 스플래시 이미지 라이브러리 npm i react-native-splash-screen --save
// 반응형 디자인을 위한 라이브러리 npm install --save react-native-responsive-dimensions
//체크박스 라이브러리 npm i react-native-bouncy-checkbox --save

//실행
// npm run start
// react-native run-android

// 클린
//cd android && gradlew clean

const Stack = createStackNavigator();

const App: React.FunctionComponent = () => {
  const [fontLoad, setFontLoad] = useState(false);

  // font 불러오기
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000); //스플래시 활성화 시간 1초
    } catch (e) {
      console.log(e.message);
    }

    const Load = async () => {
      await Font.loadAsync({
        NEXONLv1GothicBold: require('./src/assets/fonts/NEXONLv1GothicBold.ttf'),
      });
      setFontLoad(true);
    };
    Load();
  }, []);

  return fontLoad ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainPage"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CateList2"
          component={CateList2}
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
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <View style={styles.appLoading}>
      <Text>Loading...</Text>
    </View>
  );
};

// ' Loading...' 중앙 정렬
const styles = StyleSheet.create({
  appLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
