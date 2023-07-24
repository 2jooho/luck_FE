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

const FindId = ({navigation}) => {
    const nameInputRef = useRef<TextInput | null>(null);

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

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
                <View style={styles.TitleView}>
                    <Text style={styles.TitleText}>아이디 찾기</Text>
                </View>
                <View style={styles.TitleLine}></View>

                <View style={styles.NameView}>
                    <Text style={styles.MainTitle}>이름</Text>
                    <TextInput 
                        style={styles.TextInput}
                        editable={true}
                        onChangeText={(name) => setName(name)}
                        secureTextEntry={false}
                        ref={nameInputRef}></TextInput>
                </View>
                <View style={styles.PhoneView}>
                    <Text style={styles.MainTitle}>핸드폰 번호 (숫자만 입력)</Text>
                    <View style={styles.PhoneInputView}>
                        <TextInput 
                            style={styles.TextInput}
                            editable={true}
                            onChangeText={(phone) => setPhone(phone)}
                            secureTextEntry={false}
                            ref={nameInputRef}></TextInput>

                        <Pressable style={styles.PhoneCertiView} onPress={()=> {navigation.goBack()}}>
                            <Text style={styles.PhoneCertiText}>인증요청</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.AlterView}>
                    <Text style={styles.AlterText}>핸드폰 인증해주세요.</Text>
                </View>

                <TouchableOpacity
                    style={styles.FindIdButton}
                    onPress={() => {
                        
                    }}>
                    <Text style={styles.FindIdButtonText}>아이디 찾기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.FindPasswordButton}
                    onPress={() => {
                        
                    }}>
                    <Text style={styles.FindPasswordButtonText}>비밀번호 찾기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.FindPasswordButton}
                    onPress={() => {
                        navigation.navigate('FindFinish')
                    }}>
                    <Text style={styles.FindPasswordButtonText}>회원가입</Text>
                </TouchableOpacity>

                <Pressable style={styles.GobackView} onPress={()=> {navigation.goBack()}}>
                    <Text style={styles.GobackText}>◀ 뒤로가기</Text>
                </Pressable>
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
    },
    TitleView:{
        marginTop:hp(20),
    },
    TitleText:{
        fontSize:wp(6),
        fontWeight:'600',
        color:'#ffffff',
    },
    TitleLine:{
        width:wp(50),
        height:hp(0.2),
        backgroundColor:'#ffffff',
        borderRadius:5,
        marginTop:hp(1.5),
    },
    NameView: {
        marginTop:hp(7),
        width:wp(70),
        height:hp(10),
    },
    MainTitle:{
        fontSize:wp(2.5),
        fontWeight:'500',
        color:'#939393',
        marginBottom:hp(0.3),
    },
    TextInput:{
        fontSize:wp(4.8),
        fontWeight:'500',
        color:'#7a7777',
        paddingLeft:wp(4),
        borderWidth:1,
        borderColor:'#b39dd9',
        borderRadius: 5,
    },
    PhoneView: {
        marginTop:hp(0.5),
        width:wp(70),
        height:hp(10),
    },
    PhoneInputView:{
        justifyContent:'center',
    },
    PhoneCertiView:{
        width:wp(17),
        height:hp(4),
        borderWidth:1.2,
        borderColor:'#8e4ffa',
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end',
        right:wp(2),
        position:'absolute',
    },
    PhoneCertiText:{
        fontSize:hp(1.45),
        fontWeight:'900',
        color:'#8e4ffa',
        marginRight:wp(5),
        position:'absolute',
    },
    FindIdButton:{
        backgroundColor: '#8e4ffa',
        width: wp(70),
        height: hp(7),
        justifyContent: 'center',
        marginTop: hp(6.5),
        borderRadius: 5
    },
    FindIdButtonText:{
        fontSize: wp(3.7),
        fontWeight:'800',
        color: '#ffffff',
        textAlign: 'center'
    },
    FindPasswordButton:{
        backgroundColor: '#ffffff',
        width: wp(70),
        height: hp(7),
        justifyContent: 'center',
        marginTop: hp(1),
        borderRadius: 5,
        borderWidth:1,
        borderColor:'#8e4ffa'
        
    },
    FindPasswordButtonText:{
        fontSize: wp(3.7),
        fontWeight:'800',
        color: '#8e4ffa',
        textAlign: 'center'
    },
    GobackView:{
        alignSelf:'flex-start',
        marginTop:hp(4),
        marginLeft:wp(5),
    },
    GobackText:{
        fontSize: wp(3.2),
        fontWeight:'600',
        color: '#8e4ffa',
    },
    AlterView:{
        marginTop:hp(1),
    },
    AlterText:{
        fontSize: wp(2.5),
        fontWeight:'200',
        color: '#dc005c',
        textAlign: 'center'
    },
})

export default FindId;