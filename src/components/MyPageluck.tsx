
import React, {useState} from 'react';
import {StyleSheet, Image, Text, SafeAreaView, View, ImageBackground} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const MyPageLuck = ({data}: any) => {
  return (
      <SafeAreaView style={styles.container}>
        {/* 천간 */}
          <View style={styles.TotalView}>
              <View style={styles.MainView}>
                  <Image style={styles.FirstImg}
                        source={require('../assets/images/saju-byeong.png')}
                        //  source={{uri : `https://pureluckupload.s3.ap-northeast-2.amazonaws.com${data.myLuckTopDto.timeLuckImg}`}}  //이미지경로
                         >
                  </Image>
                  <View style={styles.TextView}>
                    <Text style={styles.TextStyle}>{data?.myLuckTopDto.timeLuckKorean}{data?.myLuckTopDto.timeLuckChinese}</Text>
                  </View>
              </View>
              <View style={styles.MainView}>
                  <Image style={styles.FirstImg}
                        source={require('../assets/images/saju-byeong.png')}
                        //  source={{uri : `https://pureluckupload.s3.ap-northeast-2.amazonaws.com${data.myLuckTopDto.dayLuckImg}`}}  //이미지경로
                        >
                  </Image>
                  <View style={styles.TextView}>
                    <Text style={styles.TextStyle}>{data?.myLuckTopDto.dayLuckKorean}{data?.myLuckTopDto.dayLuckChinese}</Text>
                  </View>
              </View>
              <View style={styles.MainView}>
                  <Image style={styles.FirstImg}
                        source={require('../assets/images/saju-byeong.png')}
                        //  source={{uri : `https://pureluckupload.s3.ap-northeast-2.amazonaws.com${data.myLuckTopDto.monthLuckImg}`}}  //이미지경로
                        >
                  </Image>
                  <View style={styles.TextView}>
                    <Text style={styles.TextStyle}>{data?.myLuckTopDto.monthLuckKorean}{data?.myLuckTopDto.monthLuckChinese}</Text>
                  </View>
              </View>
              <View style={styles.MainView}>
                  <Image style={styles.FirstImg}
                        source={require('../assets/images/saju-byeong.png')}
                        //  source={{uri : `https://pureluckupload.s3.ap-northeast-2.amazonaws.com${data.myLuckTopDto.yearLuckImg}`}}  //이미지경로
                        >
                  </Image>
                  <View style={styles.TextView}>
                    <Text style={styles.TextStyle}>{data?.myLuckTopDto.yearLuckKorean}{data?.myLuckTopDto.yearLuckChinese}</Text>
                  </View>
              </View>
          </View>
          
          {/* 지지 */}
          <View style={styles.TotalView}>
              <View style={styles.MainView}>
                  <Image style={styles.FirstImg}
                        source={require('../assets/images/saju-byeong.png')}
                        //  source={{uri : `https://pureluckupload.s3.ap-northeast-2.amazonaws.com${data.myLuckBtmDto.timeLuckImg}`}}  //이미지경로
                         >
                  </Image>
                  <View style={styles.TextView}>
                    <Text style={styles.TextStyle}>{data?.myLuckBtmDto.timeLuckKorean}{data?.myLuckBtmDto.timeLuckChinese}</Text>
                  </View>
              </View>
              <View style={styles.MainView}>
                  <Image style={styles.FirstImg}
                        source={require('../assets/images/saju-byeong.png')}
                        //  source={{uri : `https://pureluckupload.s3.ap-northeast-2.amazonaws.com${data.myLuckBtmDto.dayLuckImg}`}}  //이미지경로
                        >
                  </Image>
                  <View style={styles.TextView}>
                    <Text style={styles.TextStyle}>{data?.myLuckBtmDto.dayLuckKorean}{data?.myLuckBtmDto.dayLuckChinese}</Text>
                  </View>
              </View>
              <View style={styles.MainView}>
                  <Image style={styles.FirstImg}
                        source={require('../assets/images/saju-byeong.png')}
                        //  source={{uri : `https://pureluckupload.s3.ap-northeast-2.amazonaws.com${data.myLuckBtmDto.monthLuckImg}`}}  //이미지경로
                        >
                  </Image>
                  <View style={styles.TextView}>
                    <Text style={styles.TextStyle}>{data?.myLuckBtmDto.monthLuckKorean}{data?.myLuckBtmDto.monthLuckChinese}</Text>
                  </View>
              </View>
              <View style={styles.MainView}>
                  <Image style={styles.FirstImg}
                        source={require('../assets/images/saju-byeong.png')}
                        //  source={{uri : `https://pureluckupload.s3.ap-northeast-2.amazonaws.com${data.myLuckBtmDto.yearLuckImg}`}}  //이미지경로
                        >
                  </Image>
                  <View style={styles.TextView}>
                    <Text style={styles.TextStyle}>{data?.myLuckBtmDto.yearLuckKorean}{data?.myLuckBtmDto.yearLuckChinese}</Text>
                  </View>
              </View>
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    TotalView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    MainView:{
        width:wp(21),
        height:hp(15),
        alignItems:'center',
    },
    FirstImg:{
        resizeMode:'contain',
        width:wp(20),
        height:wp(20),
    },
    TextView:{
        borderColor:'#808080',
        borderRadius:7,
        borderWidth:1,
        width:wp(20),
        height:hp(3),
        justifyContent:'center',
        marginTop:hp(0.5),
    },
    TextStyle:{
        fontSize:wp(2.5),
        fontWeight:'900',
        color:'#8c8c91',
        textAlign:'center',
    },
})

export default MyPageLuck;

