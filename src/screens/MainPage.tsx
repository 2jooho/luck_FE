import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components/native';
import {StatusBar, StyleSheet, TouchableOpacity, SafeAreaView, Text, View, Image, ScrollView, RefreshControl} from 'react-native';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import MainCateTitle from '../components/MainCateTitle';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import LuckTextComponent from '../components/LuckTextComponent'
import LuckTextImgComponent from '../components/LuckTextImgComponent'

//import 목록
// npm i react-native-responsive-screen

const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }


const MainPage = ({navigation}) => {
    const [recommendImgUrl, setRecommendImgUrl] = useState(null);
    const [luckScore] = useState(60);
  
    const [refreshing, setRefreshing] = useState(false);
  
    //refreshcontrol을 호출할 때 실행되는 callback함수
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      wait(1000).then(() => setRefreshing(false));
    }, [])

    return(
        <SafeAreaView style={styles.safeView}>
                    {/* 상단 메뉴바 */}
                    <StatusBar barStyle="light-content" />
                    <Header />
            <ScrollView contentContainerStyle={styles.scrollview}>
                {/* 대표 텍스트 */}
                 <View style={styles.luckText}>
                    <LuckTextComponent></LuckTextComponent>
                </View>

                {/* 대표 이미지 */}
                <View style={styles.luckTextImg}>
                    <LuckTextImgComponent luckScore = {luckScore}></LuckTextImgComponent>
                </View>
            
                {/* 추천 */}
                <View style={styles.categoryView}>
                    {/* <CateListComponent title="추천" props={recommendImgUrl} ></CateListComponent> */}
                    <Text>추천</Text>
                </View>
                <ScrollView horizontal={true}>
                <View style={{width:'25%', height:'15%'}}>
                    <Image source={require('../assets/images/main/image-middle-001.jpg')} style={styles.ImgView}></Image>
                </View>
                <View style={{width:'25%', height:'20%'}}>
                    <Image source={require('../assets/images/main/image-middle-001.jpg')} style={styles.ImgView}></Image>
                </View>
                <View style={{width:'25%', height:'20%'}}>
                    <Image source={require('../assets/images/main/image-middle-001.jpg')} style={styles.ImgView}></Image>
                </View>
                </ScrollView>
                <View style={styles.categoryView}>
                    {/* <CateListComponent title="추천" props={recommendImgUrl} ></CateListComponent> */}
                    <Text>카테고리</Text>
                </View>
                {/* <View>
                    <CateListComponent></CateListComponent>
                </View> */}
                <View style={styles.scheduleImgView}>
                    <Image source={require('../assets/images/main/image-low-001.jpg')} style={styles.ImgView}></Image>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    scrollview: {
        alignItems: 'center',
        // justifyContent: 'center'
    },
    // header: {
    //     width: wp('100%'),
    //     height: hp('1%'),
    //     backgroundColor: 'orange',
    // },
    luckText: {
        width: wp('100%'),
        height: hp('20%'),
        alignItems: 'center',
        borderColor: '#ff0000',
        borderWidth: 1,
    }
    ,
    luckTextImg: {
        // top: hp('1%'),
        width: wp('100%'),
        height: hp('30%'),
        alignItems: 'center',
        borderColor: '#000000',
        borderWidth: 1,
    },
    categoryView: {
        width: wp('100%'),
        height: hp('5%'),
        borderColor: '#dd0',
        borderWidth: 1,
        flexDirection:'row',
        alignItems: 'center',
        fontSize: 30,
    },
    scheduleImgView: {
        width: wp('100%'),
        height: hp('30%'),
    },
    ImgView: {
        width: wp('100%'),
        resizeMode: 'contain',
    },

})

export default MainPage;
