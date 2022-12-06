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
import CateList from './src/screens/CateList';

import {useEffect, useState} from 'react';
import * as Font from 'expo-font';
import {Text, View, StyleSheet} from 'react-native';

const Stack = createStackNavigator();

const App: React.FunctionComponent = () => {
  const [fontLoad, setFontLoad] = useState(false);

  // font 불러오기
  useEffect(() => {
    const Load = async () => {
      await Font.loadAsync({
        fonttest: require('./src/assets/fonts/NEXONLv1GothicBold.ttf'),
      });
      setFontLoad(true);
    };
    Load();
  }, []);

  return fontLoad ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CateList"
          component={CateList}
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
