import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components/native';
import {StatusBar, StyleSheet, TouchableOpacity, SafeAreaView, Text, View, Image, ScrollView, RefreshControl, Pressable} from 'react-native';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import MainCateTitle from '../components/MainCateTitle';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const DrawerCustom = ({navigation}) => {
    
    return (
        <View style={styles.MainView}>
            <View style={styles.TopView}>
                <Text style={styles.TopText}>테스트 님, 반갑습니다.</Text>
                <View style={{width:wp(54), height:hp(27.5)}}>
                <Image style={styles.Profile} source={require('../assets/images/drawer/profile-login-standard-man.png')}></Image>
                </View>
                <Text style={styles.BtmText}>테스트</Text>
                <View style={styles.NameLine}></View>
                <View style={{top: 8}}>
                    <TouchableOpacity
                        style={styles.TopUseButton}
                        onPress={() => navigation.navigate('Mypage')}>
                        <Text style={{color: '#ffffff', fontWeight:'bold', fontSize:wp(3.1)}}>마이페이지</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.TopUseButton}
                        onPress={() => useClick()}>
                        <Text style={{color: '#ffffff', fontWeight:'bold', fontSize:wp(3.1)}}>내 리워드 현황</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.MidView}>
                <View style={styles.LineView}>
                    <Pressable onPress={() => navigation.navigate('CateList2')} style={styles.MidPressable}>
                        <Image source={require('../assets/images/drawer/icon02.png')} style={styles.CateImg}></Image>
                        <Text style={styles.CateText}>공지사항</Text>
                    </Pressable>
                </View>
                <View style={styles.LineView}>
                    <Pressable onPress={() => navigation.navigate('CateList2')} style={styles.MidPressable}>
                        <Image source={require('../assets/images/drawer/icon03.png')} style={styles.CateImg}></Image>
                        <Text style={styles.CateText}>환경설정</Text>
                    </Pressable>
                </View>
                <View style={styles.LineView}>
                    <Pressable onPress={() => navigation.navigate('CateList2')} style={styles.MidPressable}>
                        <Image source={require('../assets/images/drawer/icon01.png')} style={styles.CateImg}></Image>
                        <Text style={styles.CateText}>로그아웃</Text>
                    </Pressable>
                </View>
                <View style={styles.LineView}>
                    <Pressable onPress={() => navigation.navigate('CateList2')} style={styles.MidPressable}>
                        <Image source={require('../assets/images/drawer/icon01.png')} style={styles.CateImg}></Image>
                        <Text style={styles.CateText}>문의남기기</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.BtmView}>
                <TouchableOpacity
                    style={styles.UseButton}
                    onPress={() => useClick()}>
                    <Text style={{color: '#ffffff', fontWeight:'bold', fontSize:wp(3.1)}}>개인정보처리방침</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.UseButton}
                    onPress={() => useClick()}>
                    <Text style={{color: '#ffffff', fontWeight:'bold', fontSize:wp(3.1)}}>이용약관</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.UseButton}
                    onPress={() => useClick()}>
                    <Text style={{color: '#ffffff', fontWeight:'bold', fontSize:wp(3.1)}}>제휴 문의</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    MainView: {
        backgroundColor: '#8e4ffa',
        width: wp(57),
        height:hp(100),
    },
    TopView:{
        width: wp(57),
        height:hp(47.5),
    },
    MidView: {
        width: wp(57),
        height:hp(30),
    },
    NameLine: {
        width:wp(33),
        height:hp(0.2),
        backgroundColor:'#ffffff',
        alignSelf:'center',
    },
    MidPressable: {
        width: wp(57),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    BtmView: {
        justifyContent:'center',
        backgroundColor: '#502c9c',
        width: wp(57),
        height: hp(19.5),
    },
    Profile: {
        width: wp(36.5),
        alignSelf: 'center',
        resizeMode: 'contain',
        borderBottomColor:'#ffffff'
    },
    TopText:{
        fontSize: wp(3.5),
        fontWeight: 'bold',
        color: '#ffffff',
        alignSelf: 'center',
        top: hp(4.2)
    },
    BtmText: {
        fontSize: wp(6.1),
        fontWeight: 'bold',
        color: '#ffffff',
        alignSelf: 'center',
    },
    TopUseButton:{
        marginTop: hp(1),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width: wp(42),
        height: hp(3.8),
        borderRadius: 30,
        borderColor:'#ffffff',
        borderWidth: 1
    },
    UseButton:{
        marginTop: hp(1),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width: wp(47.4),
        height: hp(4.5),
        borderRadius: 30,
        borderColor:'#ffffff',
        borderWidth: 1
    },
    LineView:{
        width:wp(100),
        height:hp(7.5),
        backgroundColor:'#ffffff',
        borderBottomColor:'#545454',
        borderBottomWidth: 1,
    },
    CateImg:{
        width:wp(6),
        resizeMode: 'contain',
    },
    CateText:{
        marginLeft:wp(4),
        fontSize:wp(3.1),
        fontWeight:'bold',
        color:'#000000',
    },
})

export default DrawerCustom;
