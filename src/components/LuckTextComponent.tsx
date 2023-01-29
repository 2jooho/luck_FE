import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import {StyleSheet, Text, View, Image} from 'react-native';
import Colors from '../constants/Colors';
import styled from 'styled-components/native';

const LuckTextComponent = ({title}) => {

    return(
        <>
        {/* <View>
            <Image style={styles.ImgResizeMode}
                source={require('../assets/images/main/Object-008.png')}
            >
            </Image>
            <Text style={styles.luckText}>
                    {' '}
                    이봐, 너한테 날이 좋으면 뭐해? {'\n'}
                    아무것도 안하고 있으면 말짱 꽝인데!
            </Text>
        </View> */}

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
                {title}
                </LuckText>
            </TextView>
        </TextImgAndTextView>
        </>
    )
}

const styles = StyleSheet.create({
    //말풍선 텍스트
    luckText: {
        fontSize: wp(5),
        textAlign: 'center',
        fontFamily: 'NEXONLv1GothicBold',
        color: Colors.black,
        margin: '3%',
    },
    //이미지 비율 조정 모드
    ImgResizeMode: {
        resizeMode: 'contain',
    },
    
})
//텍스트 이미지와 텍스트 뷰
const TextImgAndTextView = styled.View`
  z-index: 0;
  align-items: center;
  width: 100%;
  height: 95%;
`;
//텍스트 이미지 뷰
const TextImgView = styled.View`
  position: relative;
  width: 100%;
  height: auto;
  bottom: -20;
`;
//운세 텍스트 뷰
const TextView = styled.View`
  position: absolute;
  margin-left: 10;
  margin-right: 10;
  top: 30;
`;
//말풍선 이미지
const LuckTextImg = styled.Image`
  width: 100%;
  height: 100%;
`;
//말풍선 텍스트
const LuckText = styled.Text`
  font-size: 15;
  text-align: center;
  font-family: NEXONLv1GothicBold;
  color: ${Colors.black};
  margin: 3%;
`;



export default LuckTextComponent;
