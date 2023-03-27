import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const FirstLoading = ({navigation}) => {

  // font 불러오기
  useEffect(() => {
    try {
      AsyncStorage.getItem('Authorization')
        .then((value) => {
          console.log(value);
          if(value != null){
            const userId = AsyncStorage.getItem('userId');
            navigation.navigate('MainPage', {userId: userId});
          }else {
            navigation.navigate('Login');
          }
        })
    } catch (e) {
      console.log(e);
      alert("서비스 접속이 원활하지 않습니다. 잠시 후 다시 이용해주세요.");
    }
  }, []);

    return (
        <View style={styles.appLoading}>
          <Text>Loading...</Text>
        </View>
      );
}

// ' Loading...' 중앙 정렬
const styles = StyleSheet.create({
    appLoading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default FirstLoading;