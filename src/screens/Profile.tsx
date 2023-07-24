import React, { useState, useEffect, useRef } from 'react';
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, StatusBar, Image, Clipboard, Pressable, TextInput, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Loading from '../components/Loading'
import {myProfile} from "../api/Mypage";
import SettingHeader from "../components/SettingHeader";
import MyPageComponent from "../components/MypageComponent";
import { useQuery, useMutation } from 'react-query';
import { useSelector } from "react-redux";
import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    // const userData = useSelector((state:any) => state.userDataSlicer.userData)
    const userId = 'testtest';//userData.userId;

    const nickNameInputRef = useRef<TextInput | null>(null);
    const passwordInputRef = useRef<TextInput | null>(null);
    const phoneInputRef = useRef<TextInput | null>(null);

    const [ disable, setDisable ] = useState(false);
    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
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
            <ScrollView>
                {/* 상단 메뉴바 */}
                <StatusBar barStyle="light-content" />
                <SettingHeader navigation={navigation} title={'프로필 설정'} />

                {/*상당 프로필*/}
                <View style={styles.TopLine}></View>
                <View style={styles.TopView}>
                    <View style={styles.ProfileView}>
                        <Image style={styles.ProfileImg}
                            source={require('../assets/images/myprofile.png')}
                            // source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/mypage/mypageView/myprofile.png'}}>
                            >
                        </Image>
                    </View>
                    <View style={styles.TextView}>
                        <Text style={styles.MainText}>프로필 사진</Text>
                        <Text style={styles.SubText}>원하시는 사진을 업로드해 {"\n"}프로필을 만드실 수 있습니다.</Text>
                    </View>
                </View>

                {/* 프로필 정보 */}
                <View style={styles.MainProfileView}>
                    <Text style={styles.MainTitle}>닉네임</Text>
                    <TextInput 
                        style={styles.TextInput}
                        editable={disable}
                        onChangeText={(nick) => setNickName(nick)}
                        secureTextEntry={false}
                        ref={nickNameInputRef}>이안</TextInput>
                </View>

                <View style={styles.MainProfileView}>
                    <Text style={styles.MainTitle}>생년월일</Text>
                    <TextInput 
                        style={styles.TextInput}
                        editable={disable}
                        secureTextEntry={false}>1994.5.28</TextInput>
                </View>

                <View style={styles.MainProfileView}>
                    <Text style={styles.MainTitle}>생시</Text>
                    <TextInput 
                        style={styles.TextInput}
                        editable={disable}
                        secureTextEntry={false}>자시 / 23:30 ~ 01:29</TextInput>
                </View>

                <View style={styles.MainProfileView}>
                    <Text style={styles.MainTitle}>성별</Text>
                    <TextInput 
                        style={styles.TextInput}
                        editable={disable}
                        secureTextEntry={false}>남자</TextInput>
                </View>

                <View style={styles.MainProfileView}>
                    <Text style={styles.MainTitle}>비밀번호</Text>
                    <TextInput 
                        style={styles.TextInput}
                        editable={disable}
                        onChangeText={(password) => setPassword(password)}
                        secureTextEntry={true}
                        ref={passwordInputRef}>a123456</TextInput>
                </View>

                <View style={styles.MainProfileView}>
                    <Text style={styles.MainTitle}>연락처 정보</Text>
                    <TextInput 
                        style={styles.TextInput}
                        editable={disable}
                        onChangeText={(phone) => setPhone(phone)}
                        secureTextEntry={false}
                        ref={phoneInputRef}>010-4788-6112</TextInput>
                </View>

                <TouchableOpacity
                    style={styles.EditButton}
                    onPress={() => {
                        
                    }}>
                    <Text style={styles.EditButtonText}>정보 수정</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TopLine:{
        backgroundColor:'#d9d9d9',
        width:wp(92),
        height:hp(1.7),
        marginTop:hp(1.8),
        borderRadius:10,
        alignSelf:'center',
    },
    TopView: {
        flexDirection:'row',
        borderColor:'#d9d9d9',
        borderBottomWidth:1,
        borderRadius:10,
        alignSelf:'center',
        width:wp(92),
        height:hp(25),
    },
    ProfileView: {
        justifyContent:'center',
        marginLeft: wp(5),
    },
    ProfileImg: {
        width: wp(32),
        resizeMode: 'contain',
    },
    TextView:{
        flexDirection:'column',
        marginLeft: wp(10),
        justifyContent:'center'
    },
    MainText:{
        fontSize:wp(5),
        fontWeight:'900',
        color:'#939393'
    },
    SubText:{
        fontSize:wp(3),
        fontWeight:'200',
        color:'#939393'
    },
    MainProfileView: {
        flexDirection:'column',
        marginTop:hp(3),
        borderColor:'#d9d9d9',
        borderBottomWidth:1,
        borderRadius:10,
        alignSelf:'center',
        width:wp(92),
        height:hp(7),
    },
    MainTitle:{
        fontSize:wp(2.5),
        fontWeight:'200',
        color:'#939393',
        marginLeft:wp(3),
    },
    TextInput:{
        fontSize:wp(4.8),
        fontWeight:'500',
        color:'#7a7777',
        marginLeft:wp(2),
    },
    EditButton:{
        backgroundColor: '#8e4ffa',
        width: wp(70),
        height: hp(5),
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: hp(2.2),
        marginBottom: hp(3),
        borderRadius: 5
    },
    EditButtonText:{
        fontSize: wp(4.2),
        color: '#ffffff',
        textAlign: 'center'
    },
})

export default Profile;