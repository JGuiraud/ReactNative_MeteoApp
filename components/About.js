import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import style from '../Style.js';
import TimeToDestination from './TimeToDestination';


export default class About extends React.Component {

    // static navigationOptions = {
    //     title: 'about',
    //     tabBarIcon: () => {
    //         return <Image source={require('./icons/search.png')} style={{ width: 30, height: 30 }} />
    //     }
    // }



    static navigationOptions = ({navigation}) => {
        return {
            title: 'about',
            tabBarIcon: () => {
                return <Image source={require('./icons/about.png')} style={{ width: 30, height: 30 }} />
            }

        }
    }

    // static navigationOptions = ({navigation}) => {
    //         return {
    //             title: `test`,
    //             tabBarIcon: () => {
    //                 return <Image source={require('./icons/search.png')} style={{ width: 30, height: 30 }} />
    //             }
    //         }
    //     }


    github() {
        console.log('gitgub')
    }

    test() {
        this.props.navigation.navigate('ResultDetailed')
    }



    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>À Propos de l'application</Text>
                <Text>Cette application a été développée en quatre jours utilisant la technologie react-native dans le cadre de la formation Développeur Web/Mobile | Simplon Occitanie.</Text>
                <Button color={style.color} onPress={() => this.github()} title="Github du projet" />
            </View>

        );
    }
}