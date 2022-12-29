import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';

const FeedSection = ({item}) => {
    return (
        <>
        <View style={styles.ImgView}>
            {/* <Image source={{uri : item.imgUrl}} style={{ height: 150}} /> */}
            <Image source={item.imgUrl} style={styles.ImgResizeMode} />
            {/* <Text style={{ height: 100}}>{item.imgUrl}</Text> */}
            {/* <Text>{item.title}</Text> */}
        </View></>

    );
};

//스타일 정보 설정
const styles = StyleSheet.create({
    ImgView: {
        marginBottom: 10,
    },
    //이미지 비율 조정 모드
    ImgResizeMode: {
        resizeMode: 'contain',
        alignSelf:'center',
        borderRadius: 30,
        width : '80%',
    },
    

});

export default FeedSection;
