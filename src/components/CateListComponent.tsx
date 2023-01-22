import React, {useState} from 'react';
import { View, Image, FlatList, StyleSheet, Text, SafeAreaView } from 'react-native';

const DATA = [
    {
      title: 1,
    },
    {
      title: 2,
    },
    {
      title: 3,
    },
    {
      title: 4,
    },
    {
      title: 5,
    },
    {
      title: 6,
    },
    {
      title: 7,
    },
  ];
  
  const Item = ({title, width}) => (
    <View
      style={{
        width,
        backgroundColor: '#f9c2ff',
        padding: 20,
      }}>
      <Text style={{color: 'black', fontSize: 14}}>{title}</Text>
    </View>
  );
  
  const CateListComponent = () => {
    const [containerWidth, setContainerWidth] = useState(0);
  
    const margins = 39 * 2;
    const numColumns = 3;
    
    return (
        <SafeAreaView style={{marginTop: 20, borderColor: 'black',borderWidth: 1}}>
          <View style={{paddingHorizontal: 33}}>
          <FlatList
            data={DATA}
            columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: 32,
            }}
            onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
            renderItem={({item}) => (
                <Item
                title={item.title}
                width={(containerWidth - margins) / numColumns}
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