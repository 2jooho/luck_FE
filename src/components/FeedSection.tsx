import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet, ActivityIndicator, Text, Pressable} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const FeedSection = ({item, navigation}) => {
    return (
        <>
        <Pressable onPress={() => navigation.navigate('PureLuckMain')}>
            <Image source={{uri : item}} style={styles.FlatImage} />
        </Pressable>
        </>

    );
};

//스타일 정보 설정
const styles = StyleSheet.create({
    FlatImage: {
        resizeMode: 'contain',
        width : wp(30),
        height: wp(30),
        borderWidth: 0.6,
        borderColor: '#000000',
        margin: wp(1),
    },
});

export default FeedSection;
