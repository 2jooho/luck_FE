import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, StatusBar, Image, Clipboard, ImageBackground,Pressable} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FeedSection from '../components/FeedSection';
import CateListHeader from '../components/CateListHeader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Loading from '../components/Loading'
import {myPageApi} from "../api/Mypage";
import MyPageHeader from "./Mypageheader";
import MyPageLuck from "../components/MyPageluck";

const MyPageComponent = ({userInfo}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/mypage/mypageView/mainbox01.png'}} style={styles.MyPageBoxView} imageStyle={{borderRadius: 20, borderTopLeftRadius:30, borderTopRightRadius:30}}>
                <View style={styles.TopView}>
                    <Text style={styles.TopText}>'나'라는 사람은?</Text>
                </View>
                <View style={styles.DayView}>
                    <Text style={styles.DayText1}>나는
                    <Text style={styles.DayText2}> {userInfo?.data.myLuckTopDto.dayLuckKorean}{userInfo?.data.myLuckBtmDto.dayLuckKorean}일주
                    <Text style={styles.DayText1}> 입니다.</Text></Text></Text>
                </View>
                {/*천간*/}
                <View style={styles.LuckTopView}>
                    <MyPageLuck data = {userInfo?.data}></MyPageLuck>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent:'flex-end',
        alignItems:'center',
    },
    MyPageBoxView: {
        marginLeft: '2.5%',
        width:'97.5%',
        height:'98%',
        resizeMode: 'contain',
    },
    TopView: {
        alignSelf:'center',
        marginTop: hp(6),
    },
    TopText:{
        fontSize:wp(5.9),
        color:'#5039c5',
        fontWeight:'900',
        textAlign:'center',
    },
    DayView: {
        alignSelf:'center',
        marginTop: hp(2),
    },
    DayText1: {
        fontSize:wp(3),
        color:'#777777',
        textAlign:'center',
        fontWeight:'bold',
    },
    DayText2: {
        fontSize:wp(3.5),
        fontWeight:'900',
        color:'#a1c365',
        textAlign:'center',
    },
    LuckTopView:{
        alignSelf:'center',
        marginTop: hp(2),
    },
    UserLuckData: {
        fontSize: wp(3),
        fontWeight: "300",
        color: '#000000'
    },
    Line:{
        width: wp(10),
        height: hp(1),
        backgroundColor: '#8064a0',
        alignSelf: 'center'
    },
})

export default MyPageComponent;