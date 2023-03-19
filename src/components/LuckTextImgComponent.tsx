
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, Text} from 'react-native';

const LuckTextImgComponent = (props) => {
    const [isGoodLuck, setGoodLuck] = useState(true);
    const [charactorFlag, setCharactorFlag] = useState(props.charactorFlag);
    useEffect(() => {
      if (charactorFlag == "01") {
        setGoodLuck(true);
      } else {
        setGoodLuck(false);
      }
    }, [charactorFlag]);


    return(
        <>
        <Image
            style={styles.ImgResizeMode} 
            source={isGoodLuck
                ? {uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/main/char_img2.png'}
                : {uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/main/char_img1.png'}}
        ></Image></>
    )
}

const styles = StyleSheet.create({
    //이미지 비율 조정 모드
    ImgResizeMode: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
})

export default LuckTextImgComponent;

