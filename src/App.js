import React from 'react';
import {View} from 'react-native';

import {enableScreens} from 'react-native-screens';

import Navigator from './Navigator';

enableScreens(true);

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Navigator />
    </View>
  );
};

export default App;
