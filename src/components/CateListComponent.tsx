import React, {useState} from 'react';
import { View, Image, FlatList, StyleSheet, Text, SafeAreaView, Pressable} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

// const DATA = [
//     {
//       title: "금전",
//       img: {uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/main/bottomicon01.png'},
//     },
//     {
//       title: "직장인",
//       img: {uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/main/bottomicon02.png'},
//     },
//     {
//       title: "자영업",
//       img: {uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/main/bottomicon03.png'},
//     },
//     {
//       title: "연애/결혼",
//       img: {uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/main/bottomicon04.png'},
//     },
//     {
//       title: "취준생/면접",
//       img: {uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/main/bottomicon05.png'},
//     },
//     {
//       title: "학생/시험",
//       img: {uri : 'https://pureluckupload.s3.ap-northeast-2.amazonaws.com/img/main/bottomicon06.png'},
//     },
//   ];
  
  const Item = ({title, titleImg, width, navigation}) => (
    <View>
      <Pressable style={{width, flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.navigate('CateList3')}>
        <Image source={{uri : titleImg}} style={styles.TitleImg}></Image>
        <Text style={styles.TitleText}>{title}</Text>
      </Pressable>
    </View>
  );

  
  //카테고리 목록 컴포넌트(이미지/ 텍스트 n행 3열)
  const CateListComponent = ({navigation, cateDtoList}) => {
    const [containerWidth, setContainerWidth] = useState(0);
  
    const margins = 30 * 2;
    const numColumns = 3;
    
    return (
        <SafeAreaView>
          <View style={{paddingHorizontal: 25}}>
            <FlatList
              data={cateDtoList}
              columnWrapperStyle={{
                  justifyContent: 'space-between',
                  marginBottom: 10,
              }}
              onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
              keyExtractor={(item, index):any => index}
              renderItem={({item}) => (
                  <Item
                  title={item.cateName}
                  titleImg={item.cateImgDto.imgUrl}
                  width={(containerWidth - margins) / numColumns}
                  navigation={navigation}
                  />
              )}
              numColumns={numColumns}
            />
          </View>
        </SafeAreaView>
      );
    };

  export default CateListComponent;


  const styles = StyleSheet.create({
    TitleImg: {
      width: wp(5.5),
      height: hp(3),
      resizeMode: 'cover',
      marginRight: wp(3),
    },
    TitleText: {
      color: '#000000',
      fontSize: wp(3.2),
    },
  })