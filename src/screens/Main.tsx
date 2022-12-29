// import React from 'react';
// import styled from 'styled-components/native';
// import {StatusBar} from 'react-native';
// import Header from '../components/header';
// import {Text} from 'react-native';

// const MainView = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: #fff;
// `;

// interface Props {}
// interface State {}
// export default class Main extends React.Component<Props, State> {
//   render() {
//     return (
//       <MainView>
//         <StatusBar barStyle="light-content" />
//         <Header today={'Monday'} month={'October'} todayNum={'3'} />
//         <Text>main screens</Text>
//       </MainView>
// //     );
//   }
// }

import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components/native';
import {StatusBar, StyleSheet, TouchableOpacity, SafeAreaView, Text, View, Image, ScrollView, RefreshControl} from 'react-native';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import MainCateTitle from '../components/MainCateTitle';
// import apiClient from '../../app/apis/service/client';

/* 스타일 컴포넌트 설정 */
//전체 view
const MainView = styled.View`
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;
//대표 이미지 및 텍스트 전체 뷰
const LuckImgAndTextView = styled.View`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: white;
  border-color: red;
  border-width: 1;
  align-items: center;
`;
//텍스트 이미지와 텍스트 뷰
const TextImgAndTextView = styled.View`
  top: 15;
  position: absolute;
  z-index: 0;
  align-items: center;
  border-color: #0aaa00;
  border-width: 1;
  width: 100%;
  height: 35%;
`;
//텍스트 이미지 뷰
const TextImgView = styled.View`
  position: relative;
  width: 90%;
  height: auto;
`;
//운세 텍스트 뷰
const TextView = styled.View`
  position: absolute;
  margin-left: 10;
  margin-right: 10;
`;
//말풍선 이미지
const LuckTextImg = styled.Image`
  width: 100%;
  height: 100%;
`;

//말풍선 텍스트
const LuckText = styled.Text`
  font-size: 22px;
  text-align: center;
  font-family: fonttest;
  color: ${Colors.black};
  margin: 3%;
`;

//대표 이미지 뷰
const LuckMainImgView = styled.View`
  top: 95;
  width: 100%;
  height: auto;
  align-items: center;
  border-color: #000000;
  border-width: 1;
`;
//대표 이미지
const LuckMainImg = styled.Image`
  width: 100%;
  height: 100%;
`;

//timeout의 시간만큼 함수를 지연하고 처리하는 함수 생성
const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


//카테고리 텍스트 뷰
//함수 진행 로직
const Main = ({navigation}) => {
  const [luckScore] = useState(60);
  const [isGoodLuck, setGoodLuck] = useState(true);
  useEffect(() => {
    if (luckScore >= 70) {
      setGoodLuck(true);
    } else {
      setGoodLuck(false);
    }
  }, [luckScore]);


  const [refreshing, setRefreshing] = useState(false);

  //refreshcontrol을 호출할 때 실행되는 callback함수
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, [])



  //메인 로직 진행
  return (
    // <SafeAreaView style={styles.container}>
    // <ScrollView
    //     contentContainerStyle={styles.scrollView}
    //     refreshControl = {
    //       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //     }
    //   >
      <MainView>
      {/* 상단 메뉴바 */}
      <StatusBar barStyle="light-content" />
      {/* <Header today={'Monday'} month={'October'} todayNum={'3'} /> */}
      <Header />
      {/* 대표 이미지 및 말풍선 */}
      <LuckImgAndTextView>
        <TextImgAndTextView>
          <TextImgView>
            <LuckTextImg
              style={styles.ImgResizeMode}
              source={require('../assets/images/main/Object-008.png')}
            />
          </TextImgView>
          {/* 말풍선 텍스트 */}
          <TextView>
            <LuckText>
              {' '}
              이봐, 너한테 날이 좋으면 뭐해? {'\n'}
              아무것도 안하고 있으면 말짱 꽝인데!
            </LuckText>
          </TextView>
        </TextImgAndTextView>
        {/* 대표 이미지 */}
        {/* onPress={() => navigation.navigate('CateList')} */}
        <LuckMainImgView>
          <LuckMainImg
            style={styles.ImgResizeMode}
            source={
              isGoodLuck
                ? require('../assets/images/main/Object-001-1.png')
                : require('../assets/images/main/Object-001.png')
            }
          />
        </LuckMainImgView>
      </LuckImgAndTextView>

      {/* 추천 카테고리 */}
      <MainCateTitle title="추천"></MainCateTitle>
      {/* 질문 카테고리 */}

      {/* 캘린더 이미지 */}
      </MainView>
     
    
    // {/* </ScrollView>
    // </SafeAreaView> */}



  );
};
// function Main() {
//   return (
//     <MainView>
//       <StatusBar barStyle="light-content" />
//       {/* <Header today={'Monday'} month={'October'} todayNum={'3'} /> */}
//       <Header />

//       <Image source={require('./src/assets/images/Object-tilte001.png')} />
//     </MainView>
//   );
// }

//스타일 정보 설정
const styles = StyleSheet.create({
  //
  luckTextView: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1,
    alignItems: 'center',
  },
  //이미지 비율 조정 모드
  ImgResizeMode: {
    resizeMode: 'contain',
  },
  //대표 이미지 및 텍스트 뷰
  ImageAndText: {
    position: 'relative',
    alignItems: 'center',
    borderColor: '#000000',
    width: '90%',
    height: '30%',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 42
  }
});

export default Main;
