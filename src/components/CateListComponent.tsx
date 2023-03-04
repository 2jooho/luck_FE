import React, {useState} from 'react';
import { View, Image, FlatList, StyleSheet, Text, SafeAreaView, Pressable} from 'react-native';

const DATA = [
    {
      title: "금전",
      img: require('../assets/images/main/categoryImg/Object-002.png'),
    },
    {
      title: "직장인",
      img: require('../assets/images/main/categoryImg/Object-003.png'),
    },
    {
      title: "자영업",
      img: require('../assets/images/main/categoryImg/Object-004.png'),
    },
    {
      title: "연애/결혼",
      img: require('../assets/images/main/categoryImg/Object-005.png'),
    },
    {
      title: "취준생/면접",
      img: require('../assets/images/main/categoryImg/Object-006.png'),
    },
    {
      title: "학생/시험",
      img: require('../assets/images/main/categoryImg/Object-007.png'),
    },
  ];
  
  const Item = ({title, titleImg, width, navigation}) => (

    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center', 
        width,

      }}>
      <Pressable onPress={() => navigation.navigate('CateList2')}>
        <Image source={titleImg} style={styles.TitleImg}></Image>
        <Text style={styles.TitleText}>{title}</Text>
      </Pressable>
    </View>
  );
  
  //카테고리 목록 컴포넌트(이미지/ 텍스트 n행 3열)
  const CateListComponent = ({navigation}) => {
    const [containerWidth, setContainerWidth] = useState(0);
  
    const margins = 35 * 2;
    const numColumns = 3;
    
    return (
        <SafeAreaView>
          <View style={{paddingHorizontal: 25}}>
          <FlatList
            data={DATA}
            columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 10,
            }}
            onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
            renderItem={({item}) => (
                <Item
                title={item.title}
                titleImg={item.img}
                width={(containerWidth - margins) / numColumns}
                navigation={navigation}
                />
            )}
            keyExtractor={(item, index) => index}
            numColumns={numColumns}
          />
          </View>
        </SafeAreaView>
      );
    };

  export default CateListComponent;


  const styles = StyleSheet.create({
    TitleImg: {
      width: 20,
      height: 20,
      resizeMode: 'cover',
      marginRight: 10,
    },
    TitleText: {
      color: '#000000',
      fontSize: 14,
    },
  })