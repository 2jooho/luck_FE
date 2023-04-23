import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components/native';
import {StatusBar, StyleSheet, TouchableOpacity, SafeAreaView, Text, View, Image, ScrollView, RefreshControl} from 'react-native';
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

            </View>
            <View style={styles.BtmView}>

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
    }
})

export default DrawerCustom;
