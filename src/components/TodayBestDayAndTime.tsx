
import React, {useState} from 'react';
import {StyleSheet, Image, Text, SafeAreaView, View} from 'react-native';

const BestDayAndTime = (props) => {
  const [data, setData] = useState([{}])

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Image style={styles.characterImg}
                source={require("../assets/images/pureMain/back-character.png")}  //이미지경로
                resizeMode="contain">
        </Image>
      <Image style={styles.FirstViewImg}
                source={require("../assets/images/pureMain/box-004.png")}  //이미지경로
                resizeMode="contain">
        </Image>
        <Image style={styles.FirstIconImg}
                source={require("../assets/images/pureMain/icon-001.png")}  //이미지경로
                resizeMode="contain">
        </Image>
        <Text>오늘은
        <Text>15~17시</Text>
        가 좋아요!
        </Text>
        <Image style={styles.SecondViewImg}
                source={require("../assets/images/pureMain/box-004.png")}  //이미지경로
                resizeMode="contain">
        </Image>
        <Image style={styles.SecondIconImg}
                source={require("../assets/images/pureMain/icon-002.png")}  //이미지경로
                resizeMode="contain">
        </Image>
        <Text>오늘은
        <Text>15~17시</Text>
        가 좋아요!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
  },
  characterImg: {
    width: 80,
    alignSelf: 'flex-end',
    right: 52,
    top: -32,
    position: 'absolute',
  },
  FirstViewImg: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 30,
  },
  SecondViewImg: {
    width: '80%',
    marginTop : -35,
    alignSelf: 'center',
  },
  FirstIconImg: {
    top: 125,
    left: 60,
    position: 'absolute',
    width: 50,
    zIndex: 1,
  },
  SecondIconImg: {
    top: 45,
    left: 60,
    position: 'absolute',
    width: 50,
  },
})

export default BestDayAndTime;

