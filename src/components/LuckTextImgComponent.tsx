
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, Text} from 'react-native';

const LuckTextImgComponent = (props) => {
    const [isGoodLuck, setGoodLuck] = useState(true);
    const [luckScore, setLuckScore] = useState(props.luckScore);
    useEffect(() => {
      if (luckScore >= 70) {
        setGoodLuck(true);
      } else {
        setGoodLuck(false);
      }
    }, [luckScore]);


    return(
        <>
        <Image
            style={styles.ImgResizeMode} 
            source={isGoodLuck
                ? require('../assets/images/main/Object-001-1.png')
                : require('../assets/images/main/Object-001.png')}
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

