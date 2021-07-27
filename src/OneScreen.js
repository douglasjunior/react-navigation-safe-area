import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const OneScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <SafeAreaView style={{backgroundColor: 'blue'}}>
        <Text>One Screen</Text>
      </SafeAreaView>
    </View>
  );
};

export default OneScreen;
