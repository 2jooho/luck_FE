import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';

const SplashPage = ({ navigation }) => {
    const [fontLoad, setFontLoad] = useState(false);

    // font 불러오기
    useEffect(({navigator}) => {
      try {
        setTimeout(() => {
          SplashScreen.hide();
  
          AsyncStorage.getItem('Authorization')
          .then((value) => {
            console.log(value);
            if(value != null){
              navigator.navigate('MainPage');
            }else {
              navigator.navigate('Login');
            }
          })
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


    return fontLoad? (
        <View>
        </View>
    )
    : (
    <View style={styles.appLoading}>
      <Text>Loading...</Text>
    </View>
  );
};

export default SplashScreen;