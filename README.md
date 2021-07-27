# react-navigation-safe-area

### Project created to reproduce React Navigation bug with SafeAreaView.

Issue: https://github.com/react-navigation/react-navigation/issues/9770

### Current behavior

When using `createNativeStackNavigator` inside a `createDrawerNavigator`, the SafeAreaView component don't work inside stack screens.

<img src="./createNativeStackNavigator.png" width="200" />

But, if I remove the `Drawer` or replace `createNativeStackNavigator` to `createStackNavigator`, everything works fine.

<img src="./createStackNavigator.png" width="200" />

### Expected behavior

SafeAreaView should work with `createNativeStackNavigator` as `createStackNavigator`.

### Reproduction

https://github.com/douglasjunior/react-navigation-safe-area

### Platform

- [X] iOS

### Packages

- [X] @react-navigation/drawer
- [X] @react-navigation/stack

### Environment

| package                                | version |
| -------------------------------------- | ------- |
| @react-navigation/native               | 5.9.4
| @react-navigation/drawer               |5.12.5
| @react-navigation/stack                |5.14.5
| react-native-safe-area-context         |3.2.0
| react-native-screens                   |3.4.0
| react-native-gesture-handler           |1.10.3
| react-native-reanimated                |2.2.0
| react-native                           |0.64.2
| node                                   |12
| npm or yarn                            |yarn
