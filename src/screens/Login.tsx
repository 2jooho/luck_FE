import React, { useState, useEffect } from 'react';
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, StatusBar, Image, ImageBackground, TextInput, Alert} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CateListHeader from '../components/CateListHeader';
import BestDayAndTime from '../components/BestDayAndTime';
import TodayBestDayAndTime from '../components/TodayBestDayAndTime';
import {widthPercentage, heightPercentage, fontPercentage} from '../constants/ResponsiveSize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const Login = ({navigation}) => {

    // 외부연동
    // axios
    let REQUEST_URL = 'http://192.168.219.100:8080/luck/auth/login';
    const setLogin = async () => {
        try{
            const response:any= await axios.post(REQUEST_URL,
                {
                    userId: userId,
                    password: password,
                    deviceId: 'test',
                    osType: '2',
                    osVer: '1.0',
                    loginType: 'M',
                    loginDvsn: 'B'
                }
                );
            console.log(response);
            setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
            // AsyncStorage.multiSet([
            //     ['accessToken', response.data.accessToken],
            //     ['refreshToken', response.data.refreshToken]
            // ])
            ///response.headers.Authorization.split('Bearer ')[1]
            const accessToken = response.headers.get("Authorization");
            const refreshToken = response.headers.get("RefreshToken");
            console.log("accessToken:"+accessToken);
            console.log("refreshToken:"+accessToken);
            AsyncStorage.setItem('accessToken', accessToken);
            AsyncStorage.setItem('refreshToken', refreshToken);
            setLoginYn("Y");
        }catch(e){
            console.log(e);
            const statusCode : any = e.response.status; 
            const message : any = e.response.headers.get("resultMessage");
            alert(message);
            console.log(statusCode +"-"+message);
            if(message != null){
                alert(message);
            }else{
                alert("서비스 접속이 원활하지 않습니다. 잠시 후 다시 이용해주세요.");
            }
        }
    }

    const loginClick = () => {
        setLogin();
        if(loginYn === 'Y'){
            navigation.navigate('MainPage', {userId: users.userId})
        }
    }

    const [loginYn, setLoginYn] = useState('N');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [idInputText, setIdInputText] = useState('');
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] : any = useState([]);
    const data = [{title: 'test', imgUrl:'../assets/images/main/logo.png'}, {title: 'test', imgUrl:'../assets/images/main/logo.png'}, {title: 'test', imgUrl:'../assets/images/main/logo.png'}, {title: 'test', imgUrl:'../assets/images/main/logo.png'}]

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <ImageBackground style={styles.BackgrounImgView}
            source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/login/login_bg-02.jpg'}}  //이미지경로
            resizeMode="cover">
               <View style={{flex:0.8, alignItems:'center', justifyContent:'center'}}>
                <Image source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/login/login_char.png'}} style={styles.TopImage}></Image>
               </View>
               <View style={{flex:1.2, alignItems:'center'}}>
                <Image source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/login/login_text_img.png'}} style={styles.LogoImage}></Image>
                <Text style={{fontSize:fontPercentage(13), color:'#880eb0', marginBottom:7}}>나의 운을 제대로 써 보자!<Text style={{fontWeight:'bold'}}>운빨</Text></Text>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={(text) => {setUserId(text)}}
                    placeholder="User ID"
                    value={userId}
                />
                <TextInput
                    style={styles.TextInput}
                    onChangeText={(text) => {setPassword(text)}}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                />
                <View style={{width: widthPercentage(700), alignItems:'flex-end'}}>
                    <BouncyCheckbox
                        style={styles.checkbox}
                        size={10}
                        fillColor='#939297'
                        unfillColor="#FFFFFF"
                        text="로그인 유지"
                        innerIconStyle={{borderRadius: 0}}
                        iconStyle={{borderRadius: 0}}
                        textStyle={{fontSize: fontPercentage(13), textDecorationLine:'none'}}
                        onPress={(isChecked: boolean) => {}}
                    />
                </View>
                <TouchableOpacity
                    style={styles.LoginButton}
                    onPress={() => loginClick()}>
                    <Text style={{color: '#ffffff'}}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.LoginButton}
                    onPress={() => navigation.navigate('Join')}>
                    <Text style={{color: '#ffffff'}}>회원가입</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <TouchableOpacity
                        style={styles.EmailLoginButton}
                        onPress={() => Alert.alert("이메일로 로그인 준비중")}>
                        <Text style={{color: '#ffffff'}}>이메일로 로그인</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.EmailJoinButton}
                        onPress={() => Alert.alert("이메일로 회원가입 준비중")}>
                        <Text style={{color: '#ffffff'}}>이메일로 회원가입</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', marginTop:10}}>
                    <TouchableOpacity
                        style={styles.IdFindButton}
                        onPress={() => Alert.alert("아이디를 까먹었어요 준비중")}>
                        <Text style={{color: '#a7a7a7', fontSize: fontPercentage(10), borderBottomColor:'#a7a7a7', borderBottomWidth: 1, paddingBottom:1}}>아이디를 까먹었어요</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.PwdFindButton}
                        onPress={() => Alert.alert("비밀번호를 까먹었어요 준비중")}>
                        <Text style={{color: '#a7a7a7', fontSize: fontPercentage(10), borderBottomColor:'#a7a7a7', borderBottomWidth: 1, paddingBottom:1}}>비밀번호를 까먹었어요</Text>
                    </TouchableOpacity>
                </View>
               </View>
               <Text style={{fontSize: wp(2.2), alignSelf:'center', bottom:hp(2)}}>Copyrightⓒ2023 By 운빨. All right reserved.</Text>
            </ImageBackground>
            </View>
            
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
    },
    TopImage: {
        resizeMode: 'contain',
        width: widthPercentage(520),
        height: heightPercentage(520),
        alignItems: 'center',
        justifyContent: 'center',
    },
    LogoImage: {
        resizeMode: 'contain',
        width: widthPercentage(380),
        height: heightPercentage(300),
        marginBottom: 5
    },
    TextInput: {
        marginTop: 5,
        paddingHorizontal: 20,
        width: widthPercentage(700),
        height: heightPercentage(100),
        borderRadius: 5,
        borderColor: 'blue',
        borderWidth: 1
    },
    LoginButton: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent:'center',
        width: widthPercentage(700),
        height: heightPercentage(100),
        borderRadius: 5,
        backgroundColor: '#8e4ffa',
        borderWidth: 1
    },
    EmailLoginButton: {
        marginRight: 5,
        alignItems: 'center',
        justifyContent:'center',
        width: widthPercentage(340),
        height: heightPercentage(100),
        borderRadius: 5,
        backgroundColor: '#8e4ffa',
        borderWidth: 1
    },
    EmailJoinButton: {
        alignItems: 'center',
        justifyContent:'center',
        width: widthPercentage(340),
        height: heightPercentage(100),
        borderRadius: 5,
        backgroundColor: '#8e4ffa',
        borderWidth: 1
    },
    IdFindButton: {
        alignItems:'flex-start',
        marginRight: 10,
        width: widthPercentage(340),
    },
    PwdFindButton: {
        alignItems:'flex-end',
        width: widthPercentage(340),
    },
    checkbox: {
        marginTop: 5,
    }
})

export default Login;