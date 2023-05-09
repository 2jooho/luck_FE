import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components/native';
import {StatusBar, StyleSheet, TouchableOpacity, SafeAreaView, Text, View, Image, ScrollView, RefreshControl, Pressable} from 'react-native';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import MainCateTitle from '../components/MainCateTitle';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const DrawerCustom = ({navigation}) => {
    
    return (
        <View>
            <View style={styles.TopView}>
                <Text style={styles.TopText}>회원님, 어서오세요</Text>
                <Image style={styles.Profile} source={require('../assets/images/drawer/profile-login-standard-man.png')}></Image>
                <Text style={styles.BtmText}>테스트님, 반갑습니다.</Text>
            </View>

            <View style={styles.MidView}>
                <View style={{marginTop:hp(5)}}></View>
                <View style={styles.LineView}>
                    <Pressable onPress={() => navigation.navigate('CateList2')} style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../assets/images/drawer/icon01.png')} style={styles.CateImg}></Image>
                        <Text style={styles.CateText}>로그아웃</Text>
                    </Pressable>
                </View>
                <View style={styles.LineView}>
                    <Pressable onPress={() => navigation.navigate('CateList2')} style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../assets/images/drawer/icon02.png')} style={styles.CateImg}></Image>
                        <Text style={styles.CateText}>공지사항</Text>
                    </Pressable>
                </View>
                <View style={styles.LineView}>
                    <Pressable onPress={() => navigation.navigate('CateList2')} style={{flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../assets/images/drawer/icon03.png')} style={styles.CateImg}></Image>
                        <Text style={styles.CateText}>환경설정</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.BtmView}>
                <TouchableOpacity
                    style={styles.ProtectUserInfoButton}
                    onPress={() => protectUserInfoClick()}>
                    <Text style={{color: '#ffffff', fontWeight:'bold'}}>개인정보처리방침</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.UseButton}
                    onPress={() => useClick()}>
                    <Text style={{color: '#ffffff', fontWeight:'bold'}}>이용약관</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    TopView: {
        backgroundColor: '#8e4ffa',
        width: wp(57),
        height: hp(30),
    },
    MidView: {
        width: wp(57),
        height: hp(50),
    },
    BtmView: {
        alignSelf:'flex-end',
        backgroundColor: '#8e4ffa',
        width: wp(57),
        height: hp(17),
    },
    Profile: {
        width: wp(25),
        height: hp(25),
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    TopText:{
        fontSize: wp(3.5),
        color: '#ffffff',
        alignSelf: 'center',
        top: hp(4)        
    },
    BtmText: {
        fontSize: wp(4),
        fontWeight: 'bold',
        color: '#ffffff',
        alignSelf: 'center',
        bottom: hp(4),
    },
    ProtectUserInfoButton:{
        marginTop: hp(3),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width: wp(50),
        height: hp(5),
        borderRadius: 30,
        borderColor:'#ffffff',
        borderWidth: 1
    },
    UseButton:{
        marginTop: hp(1),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width: wp(50),
        height: hp(5),
        borderRadius: 30,
        borderColor:'#ffffff',
        borderWidth: 1
    },
    LineView:{
        width:wp(100),
        height:hp(6.7),
        flexDirection:'row',
    },
    CateImg:{
        marginLeft:wp(7),
        width:wp(7.5),
        height:hp(7.5),
        resizeMode: 'contain',
    },
    CateText:{
        marginLeft:wp(4),
        fontSize:wp(3.8),
        fontWeight:'bold',
        color:'#000000',
    },
})

export default DrawerCustom;
