import React, { useState } from 'react';
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, StatusBar, Image, ImageBackground, TextInput, Alert, Platform, Button} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CateListHeader from '../components/CateListHeader';
import BestDayAndTime from '../components/BestDayAndTime';
import TodayBestDayAndTime from '../components/TodayBestDayAndTime';
import {widthPercentage, heightPercentage, fontPercentage} from '../constants/ResponsiveSize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker'
import * as moment from 'moment'
import 'moment/locale/ko';


const Join = ({navigation}) => {
    const [idInputText, setIdInputText] = useState('');
    const [pickerSelect, setPickerSelect] = useState('');
    const [genderType, setGenderType] = useState('M');
    const [birthType, setBirthType] = useState('1');
    const [birthTime, setBirthTime] = useState('1');
    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState('');
    const [open, setOpen] = useState(false)

    const values = [
        {label:'SKT', value:'SKT'},
        {label:'KT', value:'KT'},
        {label:'LG', value:'LG'},
      ]
    const birthTypeValue = [
    {label:'양력', value:'1'},
    {label:'음력', value:'2'},
    ]  

    const birthTimeValue = [
        {label:'자시 |  23:30 ~ 01:29', value:'1'},
        {label:'축시 |  01:30 ~ 03:29', value:'2'},
        {label:'인시 |  03:30 ~ 05:29', value:'3'},
        {label:'묘시 |  05:30 ~ 07:29', value:'4'},
        ]  

    const onChangeText = (value) => {
        setPickerSelect(value);
    } 
    const onChangeBirthType = (value) => {
        setBirthType(value);
    } 
    const onChangeBirthTime = (value) => {
        setBirthTime(value);
    } 
    

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <ImageBackground style={styles.BackgrounImgView}
            source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/login/login_bg-02.jpg'}}  //이미지경로
            resizeMode="cover">
                <View style={styles.TotalView}>
                    <View style={{flex:0.24}}>
                        <Text style={styles.JoinText}>회원가입</Text>
                        <Text style={styles.JoinSmallText}>membership application</Text>
                        <View style={styles.JoinLine}></View>
                    </View>

                    <View style={{flex:0.75}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.IdTextView}>
                                <Text style={styles.CommonText}>아이디</Text>
                            </View>
                            <TextInput
                                style={styles.IdTextInput}
                                onChangeText={(text) => {setIdInputText(text)}}
                            />
                        </View>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <View style={styles.IdTextView}>
                                <Text style={styles.CommonText}>비밀번호</Text>
                            </View>
                            <TextInput
                                style={styles.IdTextInput}
                                onChangeText={(text) => {setIdInputText(text)}}
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <View style={styles.IdTextView}>
                                <Text style={styles.CommonText}>비밀번호 확인</Text>
                            </View>
                            <TextInput
                                style={styles.IdTextInput}
                                onChangeText={(text) => {setIdInputText(text)}}
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <View style={styles.PhoneTextView}>
                                <Text style={styles.CommonText}>전화번호</Text>
                            </View>
                            <TextInput
                                style={styles.PhoneTextInput}
                                onChangeText={(text) => {setIdInputText(text)}}
                            />
                            <View style={styles.TelTypeTextView}>
                                <Text style={styles.CommonText}>통신사</Text>
                            </View>
                            <RNPickerSelect
                                onValueChange={value => onChangeText(value)}
                                items={values}
                                useNativeAndroidPickerStyle={false}
                                fixAndroidTouchableBug={true}
                                placeholder={{
                                    label: "통신사 선택",
                                }}
                                style={pickerSelectStyles}
                            />
                        </View>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <View style={styles.PhoneTextView}>
                                <Text style={styles.CommonText}>성별</Text>
                            </View>
                            <TouchableOpacity
                                style={genderType == 'M'? styles.AbleGenderBtn:styles.DisableGenderBtn}
                                onPress={() => setGenderType('M')}>
                                <Text style={genderType == 'M'? styles.AbleGender:styles.DisableGender}>남성</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={genderType == 'W'? styles.AbleGenderBtn:styles.DisableGenderBtn}
                                onPress={() => setGenderType('W')}>
                                <Text style={genderType == 'W'? styles.AbleGender:styles.DisableGender}>여성</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection:'row', marginTop:10}}>
                            <View style={styles.BirthTextView}>
                                <Text style={styles.CommonText}>생년원일</Text>
                            </View>
                            <View style={styles.birthView}>
                                <RNPickerSelect
                                    onValueChange={value => onChangeBirthType(value)}
                                    items={birthTypeValue}
                                    useNativeAndroidPickerStyle={false}
                                    fixAndroidTouchableBug={true}
                                    placeholder={{
                                        label: "구분",
                                    }}
                                    style={birthTypePickerSelectStyles}
                                />
                                <TouchableOpacity
                                style={{backgroundColor:'#ffffff', width:widthPercentage(450), height: heightPercentage(90), marginLeft:5, borderRadius:5, borderColor:'gray', borderWidth:1, alignItems:'center', justifyContent:'center'}}
                                onPress={() => setOpen(true)}>
                                    <Text>{dateString}</Text>
                                </TouchableOpacity>
                                <DatePicker
                                modal
                                mode='date'
                                open={open}
                                date={date}
                                onConfirm={(date) => {
                                setOpen(false)
                                console.log(date.toString())
                                setDateString(date.getFullYear()+"."+(date.getMonth()+1)+"."+date.getDate())
                                setDate(date)
                                }}
                                onCancel={() => {
                                setOpen(false)
                                }}
                            />
                            </View>
                        </View>

                        <View style={{flexDirection:'row', marginTop:10}}>
                            <View style={styles.IdTextView}>
                                <Text style={styles.CommonText}>태어난 시간</Text>
                            </View>
                            <RNPickerSelect
                                onValueChange={value => onChangeBirthTime(value)}
                                items={birthTimeValue}
                                useNativeAndroidPickerStyle={false}
                                fixAndroidTouchableBug={true}
                                placeholder={{
                                    label: "모름",
                                }}
                                style={birthTimePickerSelectStyles}
                            />
                        </View>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <View style={styles.IdTextView}>
                                <Text style={styles.CommonText}>이메일</Text>
                            </View>
                            <TextInput
                                style={styles.IdTextInput}
                                onChangeText={(text) => {setIdInputText(text)}}
                            />
                        </View>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <View style={styles.IdTextView}>
                                <Text style={styles.CommonText}>추천인증 코드</Text>
                            </View>
                            <TextInput
                                style={styles.IdTextInput}
                                onChangeText={(text) => {setIdInputText(text)}}
                            />
                        </View>
                        <View style={{alignItems:'center', marginTop: 10}}>
                            <BouncyCheckbox
                                style={styles.checkbox1}
                                size={7}
                                fillColor='#504d4d'
                                unfillColor="#FFFFFF"
                                text="서비스 이용약관 및 개인정보 수집이용에 동의합니다."
                                innerIconStyle={{borderRadius: 0}}
                                iconStyle={{borderRadius: 0}}
                                textStyle={{fontSize: fontPercentage(8), textDecorationLine:'none'}}
                                onPress={(isChecked: boolean) => {}}
                            />
                            <BouncyCheckbox
                                style={styles.checkbox}
                                size={7}
                                fillColor='#504d4d'
                                unfillColor="#FFFFFF"
                                text="마케팅 정보수신에 동의합니다."
                                innerIconStyle={{borderRadius: 0}}
                                iconStyle={{borderRadius: 0}}
                                textStyle={{fontSize: fontPercentage(8), textDecorationLine:'none'}}
                                onPress={(isChecked: boolean) => {}}
                            />
                        </View>
                        <TouchableOpacity
                                style={{backgroundColor:'#fafa', width:widthPercentage(700), height: heightPercentage(100), alignSelf:'center', justifyContent:'center', marginTop:15, borderRadius:5}}
                                onPress={() => {
                                    Alert.alert("회원가입이 완료 되었습니다.");
                                    navigation.navigate('Login');
                                }}>
                                <Text style={{fontSize:fontPercentage(15), color:'#ffffff', textAlign:'center'}}>가입하기</Text>
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
    TotalView: {
        marginTop: widthPercentage(100),
        width: widthPercentage(900),
        height: heightPercentage(1850),
        alignItems:'center', 
        justifyContent: 'center', 
        borderRadius:20, 
        borderColor:'gray',
        borderWidth:1, 
        backgroundColor: '#ffffff',
    },
    BackgrounImgView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    JoinText: {
        fontSize: fontPercentage(25),
        color: '#fafa',
        alignSelf: 'center',
        marginTop: 50,
        fontWeight: 'bold',
    },
    JoinSmallText: {
        fontSize: fontPercentage(13),
        color: '#fafa',
        alignSelf: 'center',
    },
    JoinLine: {
        marginTop: 20,
        borderWidth:1,
        borderColor: '#fafa',
        width: widthPercentage(600),
    },
    IdTextView: {
        width: widthPercentage(240),
        borderWidth:1,
        borderRadius:5,
        borderColor:'#fafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    IdTextInput: {
        marginLeft:5,
        padding:0,
        margin:0,
        paddingHorizontal: 10,
        width: widthPercentage(560),
        height: heightPercentage(90),
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1
    },
    CommonText:{
        color:'#fafa',
        fontSize: fontPercentage(10),
    },
    PhoneTextView: {
        width: widthPercentage(150),
        borderWidth:1,
        borderRadius:5,
        borderColor:'#fafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    PhoneTextInput: {
        padding:0,
        margin:0,
        marginLeft:5,
        paddingHorizontal: 10,
        width: widthPercentage(235),
        height: heightPercentage(90),
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1
    },
    TelTypeTextView: {
        marginLeft:5,
        width: widthPercentage(150),
        borderWidth:1,
        borderRadius:5,
        borderColor:'rgba(255, 170, 255, 0.667)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    AbleGenderBtn: {
        alignItems:'center',
        justifyContent: 'center',
        marginLeft: 5,
        width: widthPercentage(320),
        height: heightPercentage(90),
        borderRadius: 5,
        borderColor: '#fafa',
        borderWidth: 1,
    },
    DisableGenderBtn: {
        alignItems:'center',
        justifyContent: 'center',
        marginLeft: 5,
        width: widthPercentage(320),
        height: heightPercentage(90),
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
    },
    AbleGender:{
        color: '#fafa',
    },
    DisableGender: {
        color: 'gray', 
        opacity:0.5
    },
    BirthTextView: {
        width: widthPercentage(150),
        height: heightPercentage(150),
        borderWidth:1,
        borderRadius:5,
        borderColor:'#fafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    birthView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        width: widthPercentage(660),
        borderRadius: 5,
        marginLeft: 5,
    },
    checkbox: {
        marginTop: 5,
    },
    checkbox1: {
        marginTop: 5,
        left: 39,
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        textAlign: 'center',
        marginLeft:5,
        fontSize: fontPercentage(10),
        width: widthPercentage(235),
        height: heightPercentage(90),
        color: '#000000',
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 5,
    },
    inputAndroid: {
        textAlign: 'center',
        marginLeft:5,
        fontSize: fontPercentage(10),
        width: widthPercentage(235),
        height: heightPercentage(90),
        color: '#000000',
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 5,
    },
});

const birthTypePickerSelectStyles = StyleSheet.create({
    inputIOS: {
        textAlign: 'center',
        marginLeft:5,
        fontSize: fontPercentage(10),
        width: widthPercentage(180),
        height: heightPercentage(90),
        color: '#000000',
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 5,
    },
    inputAndroid: {
        textAlign: 'center',
        marginLeft:5,
        fontSize: fontPercentage(10),
        width: widthPercentage(150),
        height: heightPercentage(90),
        color: '#000000',
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 5,
    },
});

const birthTimePickerSelectStyles = StyleSheet.create({
    inputIOS: {
        textAlign: 'center',
        marginLeft:5,
        fontSize: fontPercentage(10),
        width: widthPercentage(570),
        height: heightPercentage(90),
        color: '#000000',
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 5,
    },
    inputAndroid: {
        textAlign: 'center',
        marginLeft:5,
        fontSize: fontPercentage(10),
        width: widthPercentage(570),
        height: heightPercentage(90),
        color: '#000000',
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 5,
    },
});
export default Join;