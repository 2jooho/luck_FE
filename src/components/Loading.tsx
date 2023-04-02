// Loading.js
import React from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';

export default () => {
    return (
      <Background>
        <Image source={require('../assets/images/loading.gif')} />
      </Background>
    );
  };

const Background = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

