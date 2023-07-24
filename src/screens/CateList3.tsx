import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, StatusBar, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FeedSection from '../components/FeedSection';
import CateListHeader from '../components/CateListHeader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Loading from '../components/Loading'
import { useQuery, useMutation } from 'react-query';
import {category} from "../api/Category";

const CateList3 = ({navigation}) => {
    const [loading, setLoading] = useState(true); //로딩
    // 요청 데이터 설정
    const [userId, setUserId] = useState('2WEEK');
    const [cateCode, setCateCode] = useState('01');
    const [page, setPage] = useState(0);
    const [pageingSize, setPageingSize] = useState(10);

    const data= {userId: userId,
        cateCode: cateCode,
        page: page,
        pageingSize: pageingSize};

    // 외부연동
    const {data: cateInfo} = useQuery('category', ()=>category(data), {
            // retry: false,
            onSuccess: (res: any) => {
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



    // let REQUEST_URL = 'http://ec2-3-34-36-9.ap-northeast-2.compute.amazonaws.com:8081/luck/cateDetailList.do';
    // const getRefreshData = async () => {
    //     setLoading(true);
    //     try{
    //         const response = await axios.post(REQUEST_URL,
    //             {userId: userId,
    //              cateCode: cateCode,
    //              page: page,
    //              pageingSize: pageingSize}
    //             );
    //         console.log(response);
    //         setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    //         setLoading(false);
    //     }catch(e){
    //         alert("서버 오류가 발생하였습니다.");
    //         console.log(e);
    //         setLoading(false);
    //     }
    // }


    const onEndReached = () => {
        // if(!loading) {
        //     // setPage(page+1);
        //     // setPageingSize(pageingSize+10);
        //     getRefreshData();
        // }
    }
    const _renderItem = ({item}) => (
        <View style={{borderBottomWidth:1, marginTop: 20}}>
          {/* <Image source={require('../' + {item.imgUrl})} style={{ height: 200}} /> */}
          <Text style={{ height: 200}}>{item.imgUrl}</Text>
          <Text>{item.title}</Text>
        </View>
      );

    return (
        loading ? <Loading /> :
        <SafeAreaView style={styles.container}>
            {/* 상단 메뉴바 */}
            <StatusBar barStyle="light-content" />
                    <CateListHeader navigation ={navigation} title={'컨텐츠 카테고리'}/>

            {/* 상단 문구 */}
            <View style={styles.TopView}>
                <View style={styles.TopTextView}>
                    <Text style={styles.TopText}>인간관계</Text>
                </View>

                <Image style={styles.TopImage}
                source={require('../assets/images/main/Object-001.png')}
                // source={{uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/main/char_img1.png'}}
                ></Image>
                <View style={styles.TopSmallView}>
                    <Text style={styles.TopSmallText}>사람과 사람 사이에서 벌어지는 모든 감정과 일들 어쩌면 가장 어려운 것이 대인관계가 아닐까 샤바샤바</Text>
                </View>
            </View>

            {/* 하단 무한스크롤 */}
            <View style={styles.MainView}>
                <FlatList
                    data={cateInfo.data.cateDetailList}
                    style={styles.FlatList}
                    keyExtractor={(_) => _.title}
                    renderItem = {({ item }) => {
                                        return (
                                            <FeedSection item={item.cateImgUrl} navigation={navigation} />
                                        )
                                    }}

                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.6}
                    numColumns={3}
                    // ListFooterComponent={loading && <ActivityIndicator />}
                    // onRefresh={onRefresh}
                    // refreshing={refreshing}
                    // horizontal
                    // ListHeaderComponent={<StorySection />}
                />
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#9f4aff'
    },
    TopView: {
        flex:0.85,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
    },
    TopTextView:{
        width:wp(80),
        height:hp(6),
        borderWidth:1,
        borderColor:'#ff4a80',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },
    TopText: {
        fontSize:wp(3.5),
        color:'#ff5286',
        fontWeight: 'bold',
    },
    MainView:{
        flex: 1.3,
        backgroundColor:'#ffffff',
        marginTop:hp(1),
        marginBottom:hp(1.7),
    },
    TopImage:{
        width:wp(30),
        height:hp(18),
        resizeMode:'contain',
    },
    TopSmallView:{
        width:wp(60),
    },
    TopSmallText:{
        fontSize:wp(3), 
        fontWeight:'500',
        color:'#747373',
        textAlign:'center',
    },
    FlatList:{
        margin:hp(1.6),
    },
})

export default CateList3;