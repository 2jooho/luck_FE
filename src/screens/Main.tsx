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

import React, {useState} from 'react';
import styled from 'styled-components/native';
import {StatusBar, StyleSheet} from 'react-native';
import Header from '../components/Header';
import {Image, View} from 'react-native';
import Colors from '../constants/Colors';
import {useEffect} from 'react';
// import apiClient from '../../app/apis/service/client';

const MainView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
`;

const LuckTextImg = styled.Image`
  width: 100%;
  height: 100%;
`;

const LuckText = styled.Text`
  font-size: 22px;
  text-align: center;
  font-family: fonttest;
  color: ${Colors.black};
`;

const Main = () => {
  const [luckScore] = useState(80);
  const [isGoodLuck, setGoodLuck] = useState(true);
  useEffect(() => {
    if (luckScore >= 70) {
      setGoodLuck(true);
    } else {
      setGoodLuck(false);
    }
  }, [luckScore]);

  return (
    <MainView>
      <StatusBar barStyle="light-content" />
      {/* <Header today={'Monday'} month={'October'} todayNum={'3'} /> */}
      <Header />
      <View style={styles.luckTextView}>
        <View
          style={{
            position: 'relative',
            alignItems: 'center',
            borderColor: '#000000',
            width: '90%',
            height: '30%',
          }}>
          <LuckTextImg
            style={styles.ImgResizeMode}
            source={require('../assets/images/main/Object-008.png')}
          />
          <View style={{position: 'absolute', top: 60}}>
            <LuckText>
              {' '}
              이봐, 너한테 날이 좋으면 뭐해? {'\n'}
              아무것도 안하고 있으면 말짱 꽝인데! {luckScore}
            </LuckText>
          </View>
        </View>
        <Image
          style={styles.ImgResizeMode}
          source={
            isGoodLuck
              ? require('../assets/images/main/Object-001-1.png')
              : require('../assets/images/main/Object-001.png')
          }
        />
      </View>
    </MainView>
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
const styles = StyleSheet.create({
  luckTextView: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1,
    alignItems: 'center',
  },

  ImgResizeMode: {
    resizeMode: 'contain',
  },
});

export default Main;
