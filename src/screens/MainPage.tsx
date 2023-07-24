import React, {useState, useCallback, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import {TextInput, PanResponder, Dimensions, StatusBar, StyleSheet, TouchableOpacity, SafeAreaView, Text, View, Image, ScrollView, RefreshControl, Pressable, BackHandler, Alert, Modal, TouchableWithoutFeedback, Animated} from 'react-native';
import Header from '../components/Header';
import MainHeader from '../components/MainHeader'
import Colors from '../constants/Colors';
import MainCateTitle from '../components/MainCateTitle';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import LuckTextComponent from '../components/LuckTextComponent'
import LuckTextImgComponent from '../components/LuckTextImgComponent'
import CateListComponent from '../components/CateListComponent';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import Loading from '../components/Loading';
import AsyncStorage from '@react-native-community/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { useQuery} from 'react-query';
import {mainPage} from "../api/Category";
import { transform } from '@babel/core';
import { LinearGradient } from 'react-native-svg';


const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    })
  }

const MainPage = ({navigation, route}) => {
    type MainDate = {
        nickName: string;
    }
    const [response, setResponse] = useState<MainDate[]>([]);
    const [users, setUsers]: any = useState([]);
    const [recommendImgUrl, setRecommendImgUrl] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [serch, setSerch] = useState('');

    const serchInputRef = useRef<TextInput | null>(null);

    // 외부연동
    // axios
    const {data: mainInfo} = useQuery('mainPage', ()=>mainPage(), {
        // retry: false,
        onSuccess: (res: any) => {
            setLoading(false);
        },
        onError: (error:unknown) => {
            if(error != null){
                alert(error);
                setLoading(false);
            }else{
                alert("서비스 접속이 원활하지 않습니다. 잠시 후 다시 이용해주세요.");
                setLoading(false);
            }
        },
    });

    const isFocused = useIsFocused(); // isFoucesd Define
    useEffect(() => {
        if(isFocused){
        const backAction = () => {
          Alert.alert("앱 종료", "앱을 종료하시겠습니까?", [
            {
              text: "취소",
              onPress: () => null,
              style: "cancel"
            },
            { text: "확인", onPress: () => {BackHandler.exitApp();
                                            return true;} }
          ]);
          return true;
        };
    
        BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backAction)
          }
        }
      }, [isFocused]);

    const handleModalOpen = () => {
        setIsModalVisible(true);
    };
    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const onRefresh = useCallback(() => {
      setRefreshing(true);
      wait(1000).then(() => setRefreshing(false));
    }, [])

    // const recommandImgList = users.recommandCateList.map((cateList) => (
    //     <Pressable onPress={() => navigation.navigate('CateList2')}><Image source={{uri : cateList.cateImgUrl}} style={styles.ImgView}></Image></Pressable>
    // ))

    return(
        loading ? <Loading /> :
        <SafeAreaView style={styles.safeView}>
                    {/* 상단 메뉴바 */}
                    <StatusBar barStyle="light-content" />
                    <MainHeader navigation ={navigation}/>
                {/* 상단 검색어 */}
                <View style={styles.View1}>
                    <View style={styles.SerchView}>
                        <Image style={styles.SerchImg}
                        source={require('../assets/images/main/topmy.png')}></Image>
                        <TextInput
                                    style={styles.SerchText}
                                    onChangeText={(serch) => setSerch(serch)}
                                    secureTextEntry={false}
                                    ref={serchInputRef}
                                    blurOnSubmit={false}
                                    spellCheck={false}
                                    maxLength={15}
                                    placeholder="검색어를 입력하세요."
                                />
                    </View>
                </View>
                
                {/* 운세내용 */}
                <View style={styles.View2}>
                     {/* 대표 텍스트 */}
                    {/* <View style={styles.luckTextView}> */}
                        <LuckTextComponent title={mainInfo.data.pureCntnt}></LuckTextComponent>
                    {/* </View> */}

                    {/* 대표 이미지 */}
                    <View style={styles.luckTextImg}>
                        <LuckTextImgComponent charactorFlag = {mainInfo.data.charactorFlag}></LuckTextImgComponent>
                    </View>
                </View>
            
                {/* 추천 및 카테고리 */}
                <View style={styles.View3}>
                    {/* 추천 */}
                    <View style={styles.RecommandView}>
                        <Text style={styles.CategoryText}>추천 컨텐츠</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            mainInfo.data.recommandCateList ?
                            mainInfo.data.recommandCateList.map((cateList, i) => (
                                <View key={i} style={styles.recommandView}>
                                    <Pressable onPress={() => navigation.navigate('CateList3')} style={styles.recommandPressView}>
                                        <Image source={{uri : cateList.cateImgUrl}} style={styles.recommandImg}></Image>
                                    </Pressable>
                                </View>
                            ))
                            : null
                        }
                    </ScrollView>

                    {/* 카테고리 */}
                    <View style={styles.CategoryView}>
                        <Text style={styles.CategoryText}>카테고리</Text>
                    </View>
                    <View style={styles.CategoryViewMain}>
                        <CateListComponent navigation={navigation} cateDtoList={mainInfo.data.cateDtoList}></CateListComponent>
                    </View>
                </View>

                {/* 하단 캘린더 이미지 */}
                <Pressable onPress={() => setIsModalVisible(!isModalVisible)}><Image source={require('../assets/images/main/image-low-001.jpg')} style={styles.ScheduleImgView}></Image></Pressable>
            
                {/* 모달창 */}
                <Modal //모달창
                    animationType={"none"} //slide, fade, none
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => { // 뒤로가기 버튼(Android) 또는 메뉴버튼(Apple TV)을 선택할 때 실행할 함수
                        setIsModalVisible(false)
                    }}>
                    <Pressable
                        style={modalInnerStyle.modalOverlay}
                        onPress={() => setIsModalVisible(!isModalVisible)}>   
                    </Pressable>
                        <View style={modalInnerStyle.ModalMainView}>
                            <View style={modalInnerStyle.TopView}>
                                <Text style={modalInnerStyle.TitleText}>알림</Text>
                                <Pressable style={modalInnerStyle.PressView} onPress={()=> setIsModalVisible(false)}>
                                    <View style={modalInnerStyle.btnView}>
                                        <Text style={modalInnerStyle.btnText}>X</Text>
                                    </View>
                                </Pressable>
                            </View>
                            <View style={modalInnerStyle.BtmView}>
                                <Image style={modalInnerStyle.BtmImage}
                                    source={require('../assets/images/main/Object-001.png')}
                                    // source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/main/char_img1.png'}}
                                ></Image>
                                <Text style={[modalInnerStyle.BtmText]}>오픈 준비중 입니다.</Text>
                            </View>
                        </View>
                    
                </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        bottom: 0,
        backgroundColor:'#5f4a98',
    },
    View1:{
        flex:0.24,
        alignItems:'center',
        justifyContent:'center',
    },
    View2:{
        flex:0.65,
        backgroundColor:'#ffffff',
        marginTop:hp(1),
        alignItems:'center',
    },
    View3:{
        flex:1,
        backgroundColor:'#ffffff',
        marginTop:hp(1),
    },
    SerchView:{
        width: wp(90),
        height: hp(6.5),
        backgroundColor:'#ffffff',
        borderWidth: 1,
        borderRadius:13,
        borderColor:'#c1b9b8',
        marginTop:wp(1),
        flexDirection:'row',
        alignItems:'center',
    },
    SerchImg:{
        resizeMode:'contain',
        width:wp(8),
        height:hp(4),
        backgroundColor:'#111111',
        marginLeft:wp(5)
    },
    SerchText:{ 
        width:wp(67),
        height:hp(5),
        margin:0,
        padding:0,
        marginLeft:hp(2),
        fontSize:wp(4),
        fontWeight:'700',
        lineHeight:hp(5),
    },
    luckTextImg: {
        width: wp(60),
        height: hp(14),
        alignItems: 'center',
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
    RecommandView: {
        width: wp(100),
        height: hp(5),
        flexDirection:'row',
        alignItems: 'center',
        marginTop: wp(2.8),
        borderTopWidth:0.8,
        borderBottomWidth:0.8,
        borderColor:'#5f4a98',
    },
    CategoryView: {
        width: wp(100),
        height: hp(5),
        flexDirection:'row',
        alignItems: 'center',
        borderTopWidth:0.8,
        borderBottomWidth:0.8,
        borderColor:'#5f4a98',
    },
    CategoryText: {
        fontSize: wp(3.7),
        color: '#5f4a98',
        fontFamily: 'NEXONLv1GothicBold',
        marginLeft: wp(4),
    },
    CateTextView: {
        borderRadius: 10,
        backgroundColor: '#eccb38',
        width: wp(42),
        height: hp(2.4),
        position: 'absolute',
        zIndex: 0,
        left: 9,
        bottom: 0.8,
    },
    CategoryViewMain:{
        width: '100%',
        height: hp(10.5),
        marginTop:hp(1.5),
    },
    recommandView:{
        alignItems:'center',
        justifyContent:'center',
    },
    recommandPressView:{
        borderWidth:1,
        margin:wp(1),
    },
    recommandImg: {
        width: wp(30),
        height: wp(30),
        resizeMode: 'contain',
    },
    ScheduleImgView: {
        width: wp(100),
        height: hp(11),
        resizeMode: 'stretch',
    },
})

const modalInnerStyle = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },  // 모달이 띄워졌을 때 화면을 어둡게 하기 위한 오버레이
    ModalMainView: {
        width: wp(80),
        height: hp(31.5),
        backgroundColor: '#8e4ffa',
        borderRadius:10,
        alignItems:'center',
        position:'absolute',
        alignSelf:'center',
        marginTop:hp(28),
    },  // 모달 스타일
    TopView:{
        width:'100%',
        height:hp(7),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    TitleText: {
        fontSize: wp(6),
        color:'#ffffff',
        fontWeight: '600',
        textAlign:'center',
    },
    BtmImage:{
        marginTop:wp(5),
        width:wp(30),
        height:hp(14),
        resizeMode:'contain',
    },
    BtmText: {
        fontSize: wp(4.7),
        fontWeight: '700',
        marginTop:wp(4),
        color:'#8e4ffa',
        textAlign: 'center'
    },
    PressView:{
        right: wp(-27),
    },
    btnView: {
        width: wp(8),
        height: wp(8),
        backgroundColor: '#ffffff',
        borderRadius: 5,
    },
    btnText: {
        fontSize: wp(6),
        fontWeight: '700',
        textAlign: 'center',
        color: '#8e4ffa',
    },
    BtmView:{
        backgroundColor:'#ffffff',
        width:'98%',
        height:hp(24),
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        alignItems:'center',
    },
})

export default MainPage;
