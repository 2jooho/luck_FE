
import React, {useState} from 'react';
import {StyleSheet, Image, Text, SafeAreaView, View, ImageBackground} from 'react-native';

const BestDayAndTime = (props) => {
  const [data, setData] = useState([{}])

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <View style={styles.TopView}>
          <Text style={styles.TopText}>가장 좋은 날과 시간 BEST</Text>
      </View>
      <ImageBackground style={styles.BestMainImage}
                source={require("../assets/images/pureMain/box-001.png")}  //이미지경로
                resizeMode="contain">
        <Image style={styles.FirstImg}
                source={require("../assets/images/pureMain/box-002.png")}  //이미지경로
                resizeMode="contain">
        </Image>
        <Text style={styles.FirstDayText}>2022. 07. 25</Text>
        <Text style={styles.FirstTimeText}>15~17시</Text>
        <Image style={styles.FirstIconImg}
                source={require("../assets/images/pureMain/icon-001.png")}  //이미지경로
                resizeMode="contain">
        </Image>
        <Image style={styles.SecondImg}
                source={require("../assets/images/pureMain/box-003.png")}  //이미지경로
                resizeMode="contain">
        </Image>
        <Text style={styles.SecondDayText}>2022. 08. 02</Text>
        <Text style={styles.SecondTimeText}>15~17시</Text>
        <Image style={styles.SecondIconImg}
                source={require("../assets/images/pureMain/icon-002.png")}  //이미지경로
                resizeMode="contain">
        </Image>
      </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
  },
  BestMainImage: {
    width: '100%',
    height: '100%',
},
TopView: {
  marginTop: 60,
  marginLeft: 30,
  backgroundColor:'#000009',
  width:'65%',
  height:'12%',
  alignSelf:'flex-start',
  flexDirection: 'row',
  justifyContent:'center',
  alignItems:'center',
  borderTopLeftRadius:10,
  borderTopRightRadius:10,
},
TopText: {
  fontSize:16.5,
  color:'#6d6c23',
  fontWeight: 'bold',
},
FirstIconImg: {
  top: 32,
  left: 80,
  position: 'absolute',
  width: 50,
},
FirstDayText: {
  top: 45,
  paddingLeft:30,
  fontSize:22,
  color:'rgb(77, 76, 76)',
  fontWeight: 'bold',
  alignSelf:'center',
  position: 'absolute'
},
FirstTimeText: {
  top: 72,
  left: 147,
  fontSize:20,
  color: 'rgb(199, 21, 175)',
  fontWeight: 'bold',
  alignSelf:'center',
  position: 'absolute'
},
SecondIconImg: {
  top: 140,
  left: 80,
  position: 'absolute',
  width: 50,
},
SecondTimeText: {
  top: 182,
  left: 147,
  fontSize:20,
  color: 'rgb(44, 33, 148)',
  fontWeight: 'bold',
  alignSelf:'center',
  position: 'absolute'
},
SecondDayText: {
  top: 154,
  paddingLeft:30,
  fontSize:22,
  color:'rgb(77, 76, 76)',
  fontWeight: 'bold',
  alignSelf:'center',
  position: 'absolute'
},
FirstImg: {
  marginTop: 20,
  width: '75%',
  height: '40%',
  alignSelf:'center',
},
SecondImg: {
  width: '75%',
  height: '40%',
  alignSelf:'center',
}
})

export default BestDayAndTime;

