import React, { useState } from 'react';
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, StatusBar, Image, ImageBackground, TextInput, Alert} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CateListHeader from '../components/CateListHeader';
import BestDayAndTime from '../components/BestDayAndTime';
import TodayBestDayAndTime from '../components/TodayBestDayAndTime';
import {widthPercentage, heightPercentage, fontPercentage} from '../constants/ResponsiveSize';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = () => {
    const [idInputText, setIdInputText] = useState('');
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([{title: 'test1', imgUrl:require('../assets/images/main/image-middle-001.jpg')},
    {title: 'test2', imgUrl: require('../assets/images/main/image-middle-002.jpg')}, {title: 'test3', imgUrl:require('../assets/images/main/image-middle-001.jpg')}, {title: 'test4', imgUrl:require('../assets/images/main/image-middle-002.jpg')}]);
    const data = [{title: 'test', imgUrl:'../assets/images/main/logo.png'}, {title: 'test', imgUrl:'../assets/images/main/logo.png'}, {title: 'test', imgUrl:'../assets/images/main/logo.png'}, {title: 'test', imgUrl:'../assets/images/main/logo.png'}]

    const [request, setRequest] = useState({
        userId: '2week',
        cateCode: '02',
        page: 0,
        pageingSize: 10
    });
   
    //fetch
    // let REQUEST_URL = 'http://localhost:8080/luck/cateDetailList.do';
    let REQUEST_URL = 'http://192.168.219.100:8080/api/test';

    const getData = () => fetch(REQUEST_URL,{
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        // body: parameters
        body: JSON.stringify({request})
    // }).then(
    //     (result) => {
    //         if(result.ok) {
    //             console.log(result)
    //             result.json().then((obj) => {
    //                     console.log(obj)
    //                     setUsers(obj.data); // 데이터는 response.data 안에 들어있습니다.
    //                 }
    //             )
    //         }
    //     }
    // ).catch((error) => {console.log(error)})
    })
        .then(response => console.log(response))
        // .then(response => response.json())
        .then(response => console.log(response))
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;})
        // .then(json=> {setUsers(json)});


    return (
        <SafeAreaView style={styles.container}>
            <View>
            <ImageBackground style={styles.BackgrounImgView}
            source={require("../assets/images/pureMain/background.jpg")}  //이미지경로
            resizeMode="cover">
               <View style={{flex:0.9, alignItems:'center', justifyContent:'center'}}>
                <Image source={require('../assets/images/main/Object-001.png')} style={styles.TopImage}></Image>
               </View>
               <View style={{flex:1.1, alignItems:'center'}}>
                <Image source={require('../assets/images/main/logo.png')} style={styles.LogoImage}></Image>
                <Text style={{fontSize:fontPercentage(13), color:'#123456'}}>나의 운을 제대로 써 보자!<Text style={{fontWeight:'bold'}}>운빨</Text></Text>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={(text) => {setIdInputText(text)}}
                    placeholder="User ID"
                />
                <TextInput
                    style={styles.TextInput}
                    onChangeText={(text) => {setIdInputText(text)}}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <View style={{width: widthPercentage(700), alignItems:'flex-end'}}>
                    <BouncyCheckbox
                        style={styles.checkbox}
                        size={10}
                        fillColor='#504d4d'
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
                    onPress={() => Alert.alert("로그인")}>
                    <Text style={{color: '#ffffff'}}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.LoginButton}
                    onPress={() => Alert.alert("회원가입")}>
                    <Text style={{color: '#ffffff'}}>회원가입</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <TouchableOpacity
                        style={styles.EmailLoginButton}
                        onPress={() => Alert.alert("이메일로 로그인")}>
                        <Text style={{color: '#ffffff'}}>이메일로 로그인</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.EmailJoinButton}
                        onPress={() => Alert.alert("이메일로 회원가입")}>
                        <Text style={{color: '#ffffff'}}>이메일로 회원가입</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', marginTop:10}}>
                    <TouchableOpacity
                        style={styles.IdFindButton}
                        onPress={() => Alert.alert("아이디를 까먹었어요")}>
                        <Text style={{color: '#000000', fontSize: fontPercentage(10), borderBottomColor:'#000000', borderBottomWidth: 1, paddingBottom:1}}>아이디를 까먹었어요</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.PwdFindButton}
                        onPress={() => Alert.alert("비밀번호를 까먹었어요")}>
                        <Text style={{color: '#000000', fontSize: fontPercentage(10), borderBottomColor:'#000000', borderBottomWidth: 1, paddingBottom:1}}>비밀번호를 까먹었어요</Text>
                    </TouchableOpacity>
                </View>
               </View>
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
        width: widthPercentage(480),
        height: heightPercentage(480),
        alignItems: 'center',
        justifyContent: 'center',
    },
    LogoImage: {
        resizeMode: 'contain',
        width: widthPercentage(400),
        marginBottom: 10
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
        backgroundColor: 'blue',
        borderWidth: 1
    },
    EmailLoginButton: {
        marginRight: 5,
        alignItems: 'center',
        justifyContent:'center',
        width: widthPercentage(340),
        height: heightPercentage(100),
        borderRadius: 5,
        backgroundColor: 'blue',
        borderWidth: 1
    },
    EmailJoinButton: {
        alignItems: 'center',
        justifyContent:'center',
        width: widthPercentage(340),
        height: heightPercentage(100),
        borderRadius: 5,
        backgroundColor: 'blue',
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