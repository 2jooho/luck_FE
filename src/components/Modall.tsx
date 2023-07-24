// import Modal from 'react-native-simple-modal';
import React, { useState, useEffect, useRef } from 'react';
import {Pressable, BackHandler ,Modal,View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, StatusBar, Image, ImageBackground, TextInput, Alert, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Modall = ({handleModalClose}:any) => {
    return(
        <Modal //모달창
                    animationType={"none"} //slide, fade, none
                    transparent={true}
                    visible={true}
                    onRequestClose={() => { // 뒤로가기 버튼(Android) 또는 메뉴버튼(Apple TV)을 선택할 때 실행할 함수
                        handleModalClose
                    }}
                >
                    <Pressable 
                    style={styles.modalOverlay}
                    onPress={() => handleModalClose}>   
                        
                        <View style={styles.bottomSheetContainer}>
                                <Text style={modalInnerStyle.recipeTitle}>알림</Text>
                                <Text style={[modalInnerStyle.coin]}>오픈 준비중 입니다.</Text>
                                <Pressable onPress={()=> handleModalClose}>
                                    <View style={modalInnerStyle.btnView}>
                                        <Text style={modalInnerStyle.btnText}>확인</Text>
                                    </View>
                                </Pressable>
                        </View>
                    </Pressable>
                </Modal>

)}
export default Modall;


const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },  // 모달이 띄워졌을 때 화면을 어둡게 하기 위한 오버레이
    bottomSheetContainer: {
        width: wp(80),
        height: hp(30),
        backgroundColor: '#fff',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        padding: wp(7)
    },  // 모달 스타일
    container: {
        zIndex:3,
        position:'absolute',
        height:'100%',
        width:'100%',
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        paddingTop: 50
    },
    buttontext:{

        position:'relative',
        left:170,
        bottom:350,
        fontSize:20,
    },
    text:{
        position:'relative',
        fontSize:15,
        fontWeight:'700',
        left:'40%',
    }

})

const modalInnerStyle = StyleSheet.create({
    recipeTitle: {
        fontSize: wp(7),
        fontWeight: '700'
    },
    coin: {
        fontSize: wp(5),
        fontWeight: '700',
        paddingTop: hp(3),
        textAlign: 'center'
    },
    btnView: {
        width: wp(15),
        height: hp(5),
        backgroundColor: '#e6c4fc',
        borderRadius: 5,
        alignSelf:'center',
        justifyContent:'center',
        marginTop: hp(4)
    },
    btnText: {
        fontSize: wp(4),
        fontWeight: '700',
        textAlign: 'center',
        color: '#fff',
    },
})