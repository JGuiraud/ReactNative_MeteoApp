import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import { TabNavigator } from 'react-navigation';

const Tabs = TabNavigator(
  {
    Search: { screen: Search },
    About: { screen: About }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      activeBackgroundColor: '#35a894',
      labelStyle: {
        fontSize: 20
      },
      style: {
        backgroundColor: '#3BB8A2',
        borderTopWidth: 1,
        borderColor: '#3BB8A2'
      }
    }
  }
)

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <Tabs />
      </View>
    );
  }
}
