import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const OtherScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <SafeAreaView style={{backgroundColor: 'blue'}}>
        <Text>Other Screen</Text>
      </SafeAreaView>
    </View>
  );
};

export default OtherScreen;
