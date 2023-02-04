import axios from 'axios';
import React, { useState } from 'react';
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, StatusBar, Image, ImageBackground} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FeedSection from '../components/FeedSection';
import CateListHeader from '../components/CateListHeader';
import BestDayAndTime from '../components/BestDayAndTime';
import TodayBestDayAndTime from '../components/TodayBestDayAndTime';

const PureLuckMain = () => {
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
            <StatusBar barStyle="light-content" />
                    <CateListHeader />
            <View>
            <ImageBackground style={styles.BackgrounImgView}
            source={require("../assets/images/pureMain/background.jpg")}  //이미지경로
            resizeMode="cover">
                <View style={styles.BestDayAndTimeView}>
                    <BestDayAndTime></BestDayAndTime>
                </View>
                <View>
                <Text style={styles.TodayText}> 당장 급하면 오늘과 내일 {'\n     '}좋은 시간이라도..</Text>
                <TodayBestDayAndTime></TodayBestDayAndTime>
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
    TodayText: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'rgb(77, 76, 76)',
        fontFamily: 'NEXONLv1GothicBold',
        marginTop: 230,
    },
    BestDayAndTimeView: {
        width: '100%',
        height: '25%',
    },
})

export default PureLuckMain;