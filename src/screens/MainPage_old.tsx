import React, {useState, useCallback, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import {PanResponder, Dimensions, StatusBar, StyleSheet, TouchableOpacity, SafeAreaView, Text, View, Image, ScrollView, RefreshControl, Pressable, BackHandler, Alert, Modal, TouchableWithoutFeedback, Animated} from 'react-native';
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
import Modall from '../components/Modall';

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

    // 외부연동
    // axios
    let REQUEST_URL = 'http://ec2-3-34-36-9.ap-northeast-2.compute.amazonaws.com:8081/luck/main.do';
    const getRefreshData = async () => {
        setLoading(true);
          const getUserId = await AsyncStorage.getItem('userId');
          if(getUserId == null) {
            alert("서비스 접속이 원활하지 않습니다. 잠시 후 다시 이용해주세요!");
            return;
          }
        try{
            const response = await axios.post(REQUEST_URL,
                {userId: getUserId},
                {
                    headers : {
                        "Content-Type": "application/json"
                        // "Authorization": "" + AsyncStorage.getItem("accessToken")
                    }
                }
                );
            console.log(response);
            setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
            console.log("user:"+users)
            setLoading(false);
        }catch(e){
            alert("서비스 접속이 원활하지 않습니다. 잠시 후 다시 이용해주세요.");
            console.log(e);
            setLoading(false);
        }
    }

    const {params} = route;

    // const {params} = route;
    useEffect(()=> {
        console.log("params:"+ params + "/params.user:"+params.userId);
        getRefreshData();
    }, [])

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

    const [recommendImgUrl, setRecommendImgUrl] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

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

            <ScrollView contentContainerStyle={styles.scrollview}>
                {/* 대표 텍스트 */}
                 <View style={styles.luckText}>
                    <LuckTextComponent title={users.pureCntnt}></LuckTextComponent>
                </View>

                {/* 대표 이미지 */}
                <View style={styles.luckTextImg}>
                    <LuckTextImgComponent charactorFlag = {users.charactorFlag}></LuckTextImgComponent>
                </View>
            
                {/* 추천 */}
                <View style={styles.RecommandView}>
                    {/* <CateListComponent title="추천" props={recommendImgUrl} ></CateListComponent> */}
                    {/* {users.cateDtoList.cateImgDto.imgUrl}  */}
                    <Text style={styles.RecommandText}>추천</Text>
                    <View style={styles.RecommandTextView}></View>
                </View>
                <ScrollView horizontal={true}>
                <View style={{marginLeft: 7}}></View>
                {
                    users.recommandCateList ?
                    users.recommandCateList.map((cateList, i) => (
                        <View key={i}>
                            <Pressable onPress={() => navigation.navigate('CateList3')}><Image source={{uri : cateList.cateImgUrl}} style={styles.ImgView}></Image></Pressable>
                        </View>
                    ))
                    : null
                }
                {/* <Pressable onPress={() => navigation.navigate('CateList2')}><Image source={require('../assets/images/main/image-middle-001.jpg')} style={styles.ImgView}></Image></Pressable>
                    <Image source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/image-middle-002.jpg'}} style={styles.ImgView}></Image>
                    <Image source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/image-middle-003.jpg'}} style={styles.ImgView}></Image> */}
                <View style={{marginLeft: 7}}></View>
                </ScrollView>

                <View style={styles.CategoryView}>
                    <Text style={styles.CategoryText}>질문 카테고리</Text>
                    <View style={styles.CateTextView}></View>
                </View>
                <View style={{width: '100%', height: 'auto'}}>
                    <CateListComponent navigation={navigation} cateDtoList={users.cateDtoList}></CateListComponent>
                </View>
                {/* 캘린더 이미지 */}
                <Pressable onPress={() => setIsModalVisible(!isModalVisible)}><Image source={require('../assets/images/main/image-low-001.jpg')} style={styles.ScheduleImgView}></Image></Pressable>
            </ScrollView>
            
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
        backgroundColor:'#ffffff',
    },
    scrollview: {
        alignItems: 'center',
    },
    luckText: {
        width: wp('80'),
        height: hp('12'),
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
        width: wp(100),
        height: hp(12),
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
