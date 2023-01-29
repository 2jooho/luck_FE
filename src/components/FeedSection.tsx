import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';

const FeedSection = ({item}) => {
    return (
        <>
        {/* <Image source={{uri : item.imgUrl}} style={{ height: 150}} /> */}
        <Image source={item.imgUrl} style={styles.ImgResizeMode} />
        {/* <Text style={{ height: 100}}>{item.imgUrl}</Text> */}
        {/* <Text>{item.title}</Text> */}
        </>

    );
};

//스타일 정보 설정
const styles = StyleSheet.create({
    //이미지 비율 조정 모드
    ImgResizeMode: {
        resizeMode: 'contain',
        alignSelf:'center',
        borderRadius: 30,
        width : '80%',
        borderWidth: 3,
        borderColor: '#000000',
        marginBottom: 10,
    },
    
});

export default FeedSection;
