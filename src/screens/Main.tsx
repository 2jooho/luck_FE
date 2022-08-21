// import React from 'react';
// import styled from 'styled-components/native';
// import {StatusBar} from 'react-native';
// import Header from '../components/header';
// import {Text} from 'react-native';

// const MainView = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: #fff;
// `;

// interface Props {}
// interface State {}
// export default class Main extends React.Component<Props, State> {
//   render() {
//     return (
//       <MainView>
//         <StatusBar barStyle="light-content" />
//         <Header today={'Monday'} month={'October'} todayNum={'3'} />
//         <Text>main screens</Text>
//       </MainView>
// //     );
//   }
// }

import React from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import Header from '../components/Header';
import {Text} from 'react-native';

const MainView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
`;

function Main() {
  return (
    <MainView>
      <StatusBar barStyle="light-content" />
      <Header today={'Monday'} month={'October'} todayNum={'3'} />
      <Text>main screens</Text>
    </MainView>
  );
}

export default Main;
