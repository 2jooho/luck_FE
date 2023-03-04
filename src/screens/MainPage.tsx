import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components/native';
import {StatusBar, StyleSheet, TouchableOpacity, SafeAreaView, Text, View, Image, ScrollView, RefreshControl, Pressable} from 'react-native';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import MainCateTitle from '../components/MainCateTitle';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import LuckTextComponent from '../components/LuckTextComponent'
import LuckTextImgComponent from '../components/LuckTextImgComponent'
import CateListComponent from '../components/CateListComponent';
import { color } from 'react-native-reanimated';
import axios from 'axios';


const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

const MainPage = ({navigation}) => {
    type MainDate = {
        nickName: string;
    }
    const [response, setResponse] = useState<MainDate[]>([]);
    const [users, setUsers]: any = useState([]);

    // 외부연동
    // axios
    let REQUEST_URL = 'http://192.168.219.100:8080/luck/main.do';
    const [request, setRequest] = useState({
        userId: '2week'
    });
    const getRefreshData = async () => {
        try{
            const response = await axios.post(REQUEST_URL,
                request);
            console.log(response);
            setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
            console.log(users)
        }catch(e){
            alert(e);
        }
    }

    useEffect(()=> {
        getRefreshData();
    }, [])

    const [recommendImgUrl, setRecommendImgUrl] = useState(null);
    const [luckScore] = useState(60);
    const [refreshing, setRefreshing] = useState(false);
    const mainText = { title: ` 이봐, 너한테 날이 좋으면 뭐해?
아무것도 안하고 있으면 말짱 꽝인데!` }


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
                    <LuckTextComponent title={mainText.title}></LuckTextComponent>
                </View>

                {/* 대표 이미지 */}
                <View style={styles.luckTextImg}>
                    <LuckTextImgComponent luckScore = {luckScore}></LuckTextImgComponent>
                </View>
            
                {/* 추천 */}
                <View style={styles.RecommandView}>
                    {/* <CateListComponent title="추천" props={recommendImgUrl} ></CateListComponent> */}
                    <Text style={styles.RecommandText}>추천</Text>
                    <View style={styles.RecommandTextView}></View>
                </View>
                <ScrollView horizontal={true}>
                <View style={{marginLeft: 7}}></View>
                <Pressable onPress={() => navigation.navigate('CateList2')}><Image source={require('../assets/images/main/image-middle-001.jpg')} style={styles.ImgView}></Image></Pressable>
                    <Image source={require('../assets/images/main/image-middle-002.jpg')} style={styles.ImgView}></Image>
                    <Image source={require('../assets/images/main/image-middle-003.jpg')} style={styles.ImgView}></Image>
                <View style={{marginLeft: 7}}></View>
                </ScrollView>

                <View style={styles.CategoryView}>
                    <Text style={styles.CategoryText}>질문 카테고리</Text>
                    <View style={styles.CateTextView}></View>
                </View>
                <View style={{width: '100%', height: 'auto'}}>
                    <CateListComponent navigation={navigation}></CateListComponent>
                </View>
                {/* 캘린더 이미지 */}
                <Image source={require('../assets/images/main/image-low-001.jpg')} style={styles.ScheduleImgView}></Image>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        bottom: 0
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
        height: hp('12%'),
        // borderColor: '#ff0000',
        // borderWidth: 1,
    }
    ,
    luckTextImg: {
        // top: hp('1%'),
        width: wp('100%'),
        height: hp('22%'),
        alignItems: 'center',
    },
    RecommandView: {
        width: wp('100%'),
        height: hp('5%'),
        flexDirection:'row',
        alignItems: 'center',
        fontSize: 30,
        marginBottom: 5,
    },
    RecommandText: {
        fontSize: 20,
        color: '#000000',
        fontFamily: 'NEXONLv1GothicBold',
        marginLeft: 30,
        position: 'absolute',
        zIndex: 1,
    },
    RecommandTextView: {
        borderRadius: 10,
        backgroundColor: '#eccb38',
        width: wp('20%'),
        height: hp('2.4%'),
        position: 'absolute',
        zIndex: 0,
        left: 9,
        bottom: 0.8,
    },
    CategoryView: {
        width: wp('100%'),
        height: hp('5%'),
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 15,
    },

    CategoryText: {
        fontSize: 20,
        color: '#000000',
        fontFamily: 'NEXONLv1GothicBold',
        marginLeft: 30,
        position: 'absolute',
        zIndex: 1,
        
    },
    CateTextView: {
        borderRadius: 10,
        backgroundColor: '#eccb38',
        width: wp('42%'),
        height: hp('2.4%'),
        position: 'absolute',
        zIndex: 0,
        left: 9,
        bottom: 0.8,
    },
    ImgView: {
        // width: wp('100%'),
        // height: hp('15%'),        
        // resizeMode: 'contain',
        // overflow: 'hidden',
        width: 150,
        height: 150,
        resizeMode: 'cover',
        margin: 10,
    },
    ScheduleImgView: {
        width: wp('100%'),
        height: hp('15%'),
        resizeMode: 'contain',
        
    },

})

export default MainPage;
