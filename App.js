import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import Search from './components/Search';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginVertical: 50, marginTop: 50 }}>
        <Search />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textessai: {
//     color: 'red',
//     fontSize: 20,
//   }
// });
