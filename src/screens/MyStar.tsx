import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, StatusBar, Image, Clipboard, Pressable, ImageBackground} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FeedSection from '../components/FeedSection';
import CateListHeader from '../components/CateListHeader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Loading from '../components/Loading'
import {myStarApi} from "../api/Mypage";
import MyPageHeader from "../components/Mypageheader";
import MyPageLuck from "../components/MyPageluck";
import { useQuery, useMutation } from 'react-query';

const MyStar = ({recommandCode, navigation}) => {
    const copyToClipboard = ({copyData}:any) => {
        Clipboard.setString(copyData);
    };

    const arr: any = [];
    const [array, setArray]:any[] = useState([]);
    const [loading, setLoading] = useState(true);
    // const userData = useSelector((state:any) => state.userDataSlicer.userData)
    const userId = 'testtest';//userData.userId;
    // 외부연동
    const {data: userStarInfo} = useQuery('MyStar', ()=>myStarApi(userId), {
            retry: false,
            onSuccess: (data: any) => {
                for (let i = 1; i <= data.data.myRecommandStarCnt; i++) {
                    const item:any = {
                        id:i,
                        i:i
                    };

                    arr.push(item);
                }
                setArray(arr);
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
        }
    );


    return (
        loading ? <Loading /> :
        <SafeAreaView style={styles.container}>
            {/* 상단 메뉴바 */}
            <StatusBar barStyle="light-content" />
            <MyPageHeader navigation={navigation} />

            {/* 상단 안내이미지 */}
            <Image source={{uri:'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/mypage/myStar/mainbox07.png'}} style={styles.TopImage}></Image>

            {/* 하단 별 */}
            <ImageBackground source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/mypage/mypageView/mainbox01.png'}} style={styles.MyPageBoxView} imageStyle={{borderRadius: 20, borderTopLeftRadius:30, borderTopRightRadius:30}}>
                <View style={styles.TopView}>
                    <Text style={styles.TopText}>나의 행운의 별 </Text>
                </View>
                <ImageBackground source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/mypage/myStar/mainbox-in01.png'}} style={styles.MiniImgView} imageStyle={{borderRadius: 4, resizeMode:'stretch'}}>
                {/* 위에 줄 별 */}
                    <FlatList
                        data={array}
                        style={styles.FlatStar}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem = {({ item }) => (
                            <View>
                                {item.i === 1 ? (
                                    <Image style={styles.Star}
                                        source={require('../assets/images/starzero.png')}
                                        // source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/mypage/myStar/starzero.png'}}  //이미지경로
                                    ></Image>
                                ) : item.i === 5 ? (
                                    <Image style={styles.Star}
                                        source={require('../assets/images/starzero.png')}
                                        // source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/mypage/myStar/starfive.png'}}  //이미지경로
                                    ></Image>
                                ) : item.i === 10 ? (
                                    <Image style={styles.StarBtm}
                                        source={require('../assets/images/starzero.png')}
                                        // source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/mypage/myStar/starten.png'}}  //이미지경로
                                    ></Image>
                                ) : (
                                    <Image style={item.i > 5 ? styles.StarBtm:styles.Star}
                                        source={require('../assets/images/starzero.png')}
                                            // source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/mypage/myStar/starone.png'}}  //이미지경로
                                    ></Image>
                                )
                                }
                            </View>
                        )
                    }
                    numColumns={5}
                    />
                {/* 아래줄 별 */}
                </ImageBackground>
            </ImageBackground>

            {/*하단 알림*/}
            {/* <View>
                <Pressable onPress={() => copyToClipboard(recommandCode)}>
                    <View><Text>추천코드복사</Text></View></Pressable>
                <Pressable onPress={() => copyToClipboard("")}><View><Text>친구초대하기</Text></View></Pressable>
            </View> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#5b4bd7',
    },
    TopImage:{
        width:wp(90),
        height:hp(30),
        resizeMode:'contain',
        alignSelf:'center',
        marginTop:hp(4),
    },
    MyPageBoxView: {
        width:wp(93.5),
        height:hp(53),
        alignSelf:'center',
        alignItems:'center',
    },
    TopView: {
        alignSelf:'center',
        marginTop: hp(6.8),
    },
    TopText:{
        fontSize:wp(5.9),
        color:'#5039c5',
        fontWeight:'900',
        textAlign:'center',
    },
    MiniImgView:{
        width:wp(80),
        height:hp(30),
        marginTop:hp(5),
    },
    FlatStar:{
    },
    StarBtmView:{
        
    },
    Star:{
        width:wp(8),
        height:hp(8),
        marginTop:hp(1),
        marginLeft:wp(6.8),
        resizeMode:'contain'
    },
    StarBtm:{
        width:wp(8),
        height:hp(8),
        marginTop:hp(7),
        marginLeft:wp(6.8),
        resizeMode:'contain'
    }
})

export default MyStar;