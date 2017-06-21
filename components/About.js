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


    search() {
        this.props.navigation.navigate('Search');
    }

    test() {
        this.props.navigation.navigate('ResultDetailed')
    }



    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>À Propos de l'application</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint repudiandae nostrum consequatur dolores voluptatum. Obcaecati laboriosam recusandae itaque expedita debitis harum velit quibusdam ullam voluptatibus omnis, veritatis aperiam aliquam dolore voluptates ipsam iure magni!</Text>
                <Button color={style.color} onPress={() => this.search()} title="Rechercher une ville" />
                <Button color={style.color} onPress={() => this.test()} title="test" />
            </View>

        );
    }
}