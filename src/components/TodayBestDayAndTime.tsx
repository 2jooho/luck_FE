
import React, {useState} from 'react';
import {StyleSheet, Image, Text, SafeAreaView, View, FlatList, Platform} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const BestDayAndTime = ({data}) => {

// const renderItem = ({item}) => (
//     <View>
//       <Image style={styles.FirstViewImg}
//               source={require("../assets/images/pureMain/box-004.png")}  //이미지경로
//               resizeMode="contain">
//       </Image>
//       <Image style={styles.FirstIconImg}
//               source={{uri : item.timeVersYearImg}}  //이미지경로
//               resizeMode="contain">
//       </Image>
//       <Text style={styles.FirstDayText}>오늘은
//         <Text style={{fontSize:wp(4.3)}}> {item.bestTime}</Text>
//         시가 좋아요!
//       </Text>
//     </View>
// );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.characterImg}
              source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/pureMain/back-character.png'}}  //이미지경로
              resizeMode="contain">
        </Image>
        {
            data ?
            data.map((list, i) => (
              // console.log("listTest:"+JSON.stringify(list.bestTime))
              <View>
                <View style={styles.TimeFirstView}>
                  <Image style={styles.FirstIconImg}
                            source={{uri : list.timeVersYearImg}}  //이미지경로
                            resizeMode="contain">
                  </Image>
                    <View style={styles.FirstView}>
                      <Text style={styles.FirstDayText}>오늘은
                        <Text style={{fontSize:wp(4.3)}}> {list.bestTime}</Text>
                        시가 좋아요!
                      </Text>
                    </View>
                </View>
                  {/* <Image style={styles.FirstViewImg}
                          source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/pureMain/box-004.png'}}  //이미지경로
                          resizeMode="contain">
                  </Image> */}
                  
              </View>
            ))
            : null
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
  },
  characterImg: {
    width: wp(22),
    alignSelf: 'flex-end',
    right: wp(14),
    top: hp(-4.2),
    position: 'absolute',
  },
  FirstView:{
    top: hp(3),
    width:wp(80),
    paddingLeft:wp(15),
    position:'absolute',
    alignItems:'center',
    alignSelf:'center',
  },
  TimeFirstView: {
    width: wp(80),
    height: hp(9),
    alignSelf: 'center',
    marginTop: hp(4),
    position:'relative',
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderColor: '#575656',
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 10,
      },
    })
  },
  SecondViewImg: {
    width: wp(80),
    marginTop : hp(-4.6),
    alignSelf: 'center',
  },
  FirstIconImg: {
    top: hp(5.7),
    left: wp(15),
    position: 'absolute',
    width: wp(13),
  },
  SecondIconImg: {
    top: hp(16),
    left: wp(15),
    position: 'absolute',
    width: wp(13),
    zIndex: 1,
  },
  FirstDayText: {
    fontSize: wp(3.8),
    color:'rgb(77, 76, 76)',
    fontWeight: 'bold',
  },
  SecondDayText: {
    top: hp(20),
    paddingLeft: wp(12),
    fontSize:wp(3.8),
    color:'rgb(77, 76, 76)',
    fontWeight: 'bold',
    alignSelf:'center',
    position: 'absolute'
  },
})

export default BestDayAndTime;

