import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../constants/Colors';
// import Sizes from '../constants/Sizes';
// import {Image} from 'react-native';

const Container = styled.View`
  flex: 0.1;
  width: 100%;
  height: 7%;
  background-color: ${Colors.white};
  padding-top: 10px;
  padding-left: 10px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1;
  border-bottom-color: ${Colors.black};
`;

const Img = styled.Image``;

const Header = () => (
  <Container>
    <View style={styles.titleView}>
      <Img
        style={styles.ImgResizeMode}
        source={require('../assets/images/main/logo.png')}
      />
    </View>
    <Img
      style={styles.ImgResizeMode}
      source={require('../assets/images/main/Object-tilte001.png')}
    />
    <Img
      style={styles.ImgResizeMode}
      source={require('../assets/images/main/Object-tilte002.png')}
    />
  </Container>
);

const styles = StyleSheet.create({
  titleView: {
    flex: 1,
    borderColor: Colors.black,
    borderWidth: 1,
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  ImgResizeMode: {
    resizeMode: 'contain',
  },
});

export default Header;
