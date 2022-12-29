import axios from 'axios';
import React, { useState } from 'react';
import {View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet, StatusBar, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FeedSection from '../components/FeedSection';
import Header from '../components/Header';

const CateList2 = () => {
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

    // const getRefreshData = async () => {
    //     try{
    //         setError(null);
    //         setRefreshing(true);
    //         const response = await axios.post(REQUEST_URL, {request});
    //         console.log(response);
    //         setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    //         setRefreshing(false);
    //     }catch(e){
    //         setError(e);
    //         console.log(e);
    //     }

    // }

    // const onRefresh = () => {
    //     if(!refreshing) {
    //         getRefreshData();
    //     }
    // }
   
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

    const onEndReached = () => {
        if(!loading) {
            getData();
        }
    }
    const _renderItem = ({item}) => (
        <View style={{borderBottomWidth:1, marginTop: 20}}>
          {/* <Image source={require('../' + {item.imgUrl})} style={{ height: 200}} /> */}
          <Text style={{ height: 200}}>{item.imgUrl}</Text>
          <Text>{item.title}</Text>
        </View>
      );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
                    <Header />
            <View style={{ marginTop: 30, backgroundColor:'#0c0b42', width:'60%', alignSelf:'center', borderTopLeftRadius:10, borderTopRightRadius:10 }}>
                <Text style={{alignSelf:'center', fontSize:18, color:'#6d6c23'}}>다른 관련 컨텐츠 같이보기</Text>
            </View>

            <FlatList
                data={users}
                // style={styles.container}

                keyExtractor={(_) => _.title}
                // renderItem={_renderItem}
                renderItem = {({ item }) => {
                                      // const { title, content } = item;
                                      return (
                                          <FeedSection item={item} />
                                      )
                                  }}

                onEndReached={onEndReached}
                // onEndReachedThreshold={0.6}
                // ListFooterComponent={loading && <ActivityIndicator />}
                // onRefresh={onRefresh}
                // refreshing={refreshing}
                // horizontal
                // ListHeaderComponent={<StorySection />}
            />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default CateList2;