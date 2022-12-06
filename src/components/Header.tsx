import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../constants/Colors';
// import Sizes from '../constants/Sizes';
// import {Image} from 'react-native';

/* 스타일 컴포넌트 */
//전체 할당 뷰
const Container = styled.View`
  flex: 0.08;
  background-color: ${Colors.white};
  flex-direction: row;
  border-bottom-width: 1;
  border-bottom-color: ${Colors.black};
`;
//메인 로고 뷰
const TitleView = styled.View`
  flex: 1;
  align-self: center;
`;
//검색, 메뉴바 서브 뷰
const SubView = styled.View`
  flex-direction: row;
  flex: 1;
`;
//검색 이미지 뷰
const SerchView = styled.View`
  flex: 1;
  /* border-color: ${Colors.black};
  border-width: 1; */
  align-items: flex-end;
  align-self: center;
`;
//메뉴바 이미지 뷰
const MenuView = styled.View`
  flex: 0.4;
  /* border-color: black;
  border-width: 1; */
  align-items: flex-end;
  padding-right: 10;
  align-self: center;
`;
//메인 로고 이미지
const TitleImg = styled.Image`
  flex: 0.65;
`;
//검색 이미지
const SerchImg = styled.Image`
  width: 30px;
  height: 30px;
`;
//메뉴 선택 이미지
const MenuImg = styled.Image`
  width: 30px;
  height: 30px;
`;
const Header = () => (
  <Container>
    <TitleView>
      <TitleImg
        style={styles.ImgResizeMode}
        source={require('../assets/images/main/logo.png')}
      />
    </TitleView>
    <SubView>
      <SerchView>
        <SerchImg
          style={styles.ImgResizeMode}
          source={require('../assets/images/main/Object-tilte001.png')}
        />
      </SerchView>
      <MenuView>
        <MenuImg
          style={styles.ImgResizeMode}
          source={require('../assets/images/main/Object-tilte002.png')}
        />
      </MenuView>
    </SubView>
  </Container>
);

/* 정적 스타일 */
const styles = StyleSheet.create({
  //동적 이미지 설정
  ImgResizeMode: {
    resizeMode: 'contain',
  },
  //검색 이미지 할당 뷰
  // serchView: {
  //   flex: 1,
  //   // borderColor: Colors.black,
  //   // borderWidth: 1,
  //   alignItems: 'flex-end',
  //   marginBottom: 10,
  //   paddingTop: 10,
  // },
  // //메뉴바 이미지 할당 뷰
  // menuView: {
  //   flex: 0.7,
  //   // borderColor: Colors.black,
  //   // borderWidth: 1,
  //   alignItems: 'flex-end',
  //   paddingRight: 10,
  //   marginBottom: 10,
  //   paddingTop: 10,
  // },
});

export default Header;
