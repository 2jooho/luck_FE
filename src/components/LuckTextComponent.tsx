import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import {StyleSheet, Text, View, Image} from 'react-native';
import Colors from '../constants/Colors';
import styled from 'styled-components/native';

const LuckTextComponent = ({title}) => {
{/* <TextImgAndTextView>
            <TextImgView>
                <LuckTextImg
                    style={styles.ImgResizeMode}
                    source={require('../assets/images/main/Object-008.png')}
                />
                </TextImgView>
            {/* 말풍선 텍스트 */}
            // <TextView>
            //     <LuckText>
            //     {title}
            //     </LuckText>
            // </TextView>
        // </TextImgAndTextView> 
    return(
        <>
            <ImageBackground style={styles.ImgResizeMode}
            source={require('../assets/images/main/Object-008.png')}>
                <LuckText>
                    {title}
                </LuckText>
            </ImageBackground>
        
        </>
    )
}

const styles = StyleSheet.create({
    //이미지 비율 조정 모드
    ImgResizeMode: {
        resizeMode: 'contain',
        // width: wp(50),
        // height: hp(10),
        // alignItems:'center',
        // justifyContent:'center',
    },
})

const ImageBackground = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  width: ${wp(65)};
  height: ${hp(10)};
  margin-top: ${hp(2)};
`;

//말풍선 텍스트
const LuckText = styled.Text`
  font-size: ${wp(3.2)};
  text-align: center;
  font-family: NEXONLv1GothicBold;
  color: ${Colors.black};
  margin-top: ${hp(0)};
`;

export default LuckTextComponent;
