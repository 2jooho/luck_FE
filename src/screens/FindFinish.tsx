import React, { useState, useEffect, useRef } from 'react';
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, StatusBar, Image, TouchableOpacity, Pressable, TextInput, ImageBackground} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Loading from '../components/Loading'
import {myProfile} from "../api/Mypage";
import SettingHeader from "../components/SettingHeader";
import MyPageComponent from "../components/MypageComponent";
import { useQuery, useMutation } from 'react-query';
import { useSelector } from "react-redux";
import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

const FindFinish = ({navigation}) => {
    const [loading, setLoading] = useState(false);

    // 외부연동
    // const {data: userInfo} = useQuery('Profile', ()=>myProfile(userId), {
    //         // retry: false,
    //         onSuccess: (res: any) => {
    //             const birth = res.data.birth;
    //             setLoading(false);
    //         },
    //         onError: (error:unknown) => {
    //             if(error != null){
    //                 alert(error);
    //                 setLoading(false);
    //             }else{
    //                 alert("서비스 접속이 원활하지 않습니다. 잠시 후 다시 이용해주세요.");
    //                 setLoading(false);
    //             }
    //         },
    //     }
    // );

    return (
        loading ? <Loading /> :
        <SafeAreaView style={styles.container}>
           <ImageBackground style={styles.BackgrounImgView}
            source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/login/login_bg-02.jpg'}}>
                <Image style={styles.Image}
                    source={require('../assets/images/main/Object-001-1.png')}
                    // source={{uri:'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/mypage/mypageView/myprofile.png'}}
                    ></Image>
                <Text style={styles.Text}>비밀번호 재설정이 완료되었습니다.{'\n'}아래의 버튼을 눌러 로그인을 완료하세요.</Text>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => {
                        navigation.navigate('Login')
                    }}>
                    <Text style={styles.ButtonText}>로그인</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    BackgrounImgView: {
        width: '100%',
        height: '100%',
        resizeMode:'contain',
        alignItems:'center',
        justifyContent:'center',
    },
    Image:{
        width:wp(40),
        height:hp(25),
        resizeMode:'contain',
        marginTop:hp(10),
    },
    Text:{
        fontSize:wp(3.5),
        textAlign:'center',
        fontWeight:'700',
        color:'#939393',
        marginTop:hp(2),
    },
    Button:{
        backgroundColor: '#ffffff',
        width: wp(70),
        height: hp(7),
        justifyContent: 'center',
        marginTop: hp(17),
        borderRadius: 5,
        borderWidth:1,
        borderColor:'#8e4ffa'
    },
    ButtonText:{
        fontSize: wp(3.7),
        fontWeight:'800',
        color: '#8e4ffa',
        textAlign: 'center'
    },
})

export default FindFinish;