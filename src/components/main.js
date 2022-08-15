import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class StartScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.header} />
            <View style={styles.title}>
              <Text style={{fontSize:35,color:'white'}}>어서와,{'\n'}개발은 처음이지?</Text>
            </View>
            <View style={styles.content}>
              {/* <Image
                style={{height:'100%',width:'100%',resizeMode:'contain'}}
                source={require('TestProject/images/img.jpg')}/> */}
            </View>
            <View style={styles.footer}>
            </View>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: 'black',
    },
    header: {
      width:'100%',
      height:'5%',
      //backgroundColor: '#ff9a9a',
    },
    title: {
      width:'100%',
      height:'18%',
      justifyContent: 'center',
      //backgroundColor: '#9aa9ff',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom:30,
      //backgroundColor: '#d6ca1a',
    },
    footer: {
      width:'100%',
      height:'20%',
      //backgroundColor: '#1ad657',
    },
  });