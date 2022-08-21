import React from 'react';
import styled from 'styled-components/native';
import Colors from '../constants/Colors';
import Sizes from '../constants/Sizes';

const Container = styled.View`
  width: 100%;
  height: 10%;
  background-color: ${Colors.normalBlueBackground};
  padding-top: 45px;
  padding-left: 30px;
  flex-direction: row;
`;

const Today = styled.Text`
  color: ${Colors.white};
  font-size: ${Sizes.titleFontSize};
`;

const Header = ({today, month, todayNum}) => (
  <Container>
    <Today>
      {today}, {month} {todayNum}
    </Today>
  </Container>
);

export default Header;
