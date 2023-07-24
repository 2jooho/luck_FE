import React, { useState, useEffect } from 'react';
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, StatusBar, Image, Clipboard, Pressable} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Loading from '../components/Loading'
import {myPageApi} from "../api/Mypage";
import MyPageHeader from "../components/Mypageheader";
import MyPageComponent from "../components/MypageComponent";
import { useQuery, useMutation } from 'react-query';
import { useSelector } from "react-redux";
import { color } from 'react-native-reanimated';

const Mypage = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    // const userData = useSelector((state:any) => state.userDataSlicer.userData)
    const userId = 'testtest';//userData.userId;
    
    const [userBirth, setUserBirth] = useState('1994년 5월 28일');
    const [luckBirth, setLuckBirth] = useState('계유년 을묘월 을유일 자시생');
    const [luckYearAny, setLuckYearAny] = useState('개띠');
    const [pageMode, setPageMode] = useState('M'); //M : 마이페이지, S: 나의 별

    // 외부연동
    const {data: userInfo} = useQuery('MyPage', ()=>myPageApi(userId), {
            // retry: false,
            onSuccess: (res: any) => {
                const birth = res.data.birth;
                setUserBirth(birth.substr(0,4) + "년" + birth.substr(4,2) + "월" + birth.substr(6,2) + "일")
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

            {/*본체*/}
            <View style={styles.TopView}>
                <View style={styles.ProfileView}>
                    <Image style={styles.ProfileImg}
                            source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/mypage/mypageView/myprofile.png'}}>
                    </Image>
                </View>
                <View style={styles.HLine}></View>
                <View style={{flexDirection:'column'}}>
                    <View style={styles.UserInfoView}>
                        {/* 정보제공 */}
                        <View style={styles.UserInfo1}>
                            <Text style={styles.NickName}>{userId}</Text>
                            <Text style={styles.Birth}>{userBirth} 생</Text>
                        </View>
                        
                        {/*정보수정 버튼*/}
                        <View style={styles.EditBtnView}>
                            <Pressable onPress={() => navigation.navigate('Profile')}>
                                <Text style={styles.EditBtnText}>프로필 설정</Text>
                            </Pressable>
                        </View>
                    </View>

                    {/* 사주생 */}
                    <View style={styles.LuckBirthView}>
                        <View style={styles.LuckYearAny}><Text style={styles.LuckYearAnyText}>{luckYearAny}</Text></View>
                        <Text style={styles.LuckBirthText}>{luckBirth}</Text>
                    </View>
                </View>
            </View>


            {/*미드(mypage | mystar)*/}
            <View style={styles.MidView}>
                <MyPageComponent userInfo={userInfo}></MyPageComponent>
            </View>

            {/* 바닥 */}
            <View style={styles.BtnView}>
            <Pressable onPress={() => navigation.navigate('MyStar', {recommandCode:userInfo.data.recomendCode, navigation:navigation})}>
                <View style={styles.StarBtn}><Text style={styles.StarBtnText}>내 별 보러가기</Text></View>
            </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#5b4bd7',
    },
    ProfileView: {
        justifyContent:'center',
        marginLeft: wp(5),
    },
    ProfileImg: {
        width: wp(32),
        resizeMode: 'contain',
    },
    HLine:{
        width: wp(0.3),
        height: hp(20),
        alignSelf:'center',
        backgroundColor: '#ffffff',
        marginLeft: wp(5),
        marginTop: wp(3),
    },
    UserInfoView: {
      flexDirection: 'row',
    },
    UserInfo1:{
        width: 'auto',
        height: hp(8),
        marginTop: hp(5),
        marginLeft: wp(3),
        flexDirection: 'column',
    },
    NickName: {
        fontSize:wp(7.2),
        fontWeight:"900",
        color:'#ffffff',
    },
    EditBtnView: {
      width: wp(22),
      height: hp(7.8),
      alignItems: 'center',
      justifyContent:'center',
      borderColor: '#ffffff',
      borderWidth: 1,
      backgroundColor: '#5b4bd7',
      marginTop: hp(4.5),
      marginLeft: wp(3),
      borderRadius: 7,
    },
    EditBtnText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: wp(2.9),
        fontWeight: "900",
    },
    UserInfoSmallView: {
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
    },
    UserIdText: {
        fontSize: wp(5),
        fontWeight: "700",
        color: '#000000'
    },
    Birth: {
        fontSize: wp(3),
        fontWeight: "900",
        color: '#ffffff'
    },
    LuckBirthView: {
        width: wp(50),
        height: hp(7),
        backgroundColor: '#463aa6',
        borderColor: '#d8c766',
        borderWidth: 1,
        borderRadius: 7,
        marginTop: hp(2),
        marginLeft: wp(3),
        justifyContent: 'center',
        alignItems:'center',
        position:'relative',
    },
    LuckBirthText: {
        fontSize: wp(2.6),
        color: '#ffec48',
        fontWeight:'900', 
    },
    LuckYearAny: {
        width: wp(9),
        height:hp(4.5),
        backgroundColor:'#1c1c1c',
        borderColor:'#d8c766',
        borderWidth:1,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:hp(-2),
        left:1,
        
    },
    LuckYearAnyText: {
        fontSize:wp(3.4),
        fontWeight:'bold',
        color:'#bec49f',
    },
    UserLuckData: {
        fontSize: wp(3),
        fontWeight: "300",
        color: '#000000'
    },
    MyPageBoxView: {
        width: wp(10),
        height: hp(10),
        resizeMode: 'contain',
    },
    Line:{
        width: wp(10),
        height: hp(1),
        backgroundColor: '#8064a0',
        alignSelf: 'center'
    },
    TopView: {
        flex: 1,
        flexDirection:'row',
    },
    MidView: {
        flex:2,
    },
    BtnView: {
        flex:0.5,
        backgroundColor:'#61a1c1',
        alignItems:'center',
        justifyContent:'center'
    },
    StarBtn:{
        width: wp(84),
        height: hp(7.5),
        backgroundColor:'#fff6dc',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    StarBtnText: {
        fontSize: wp(3.9),
        fontWeight: '900',
        color:'#337279'
    }

})

export default Mypage;