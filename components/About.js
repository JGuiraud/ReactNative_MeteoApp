import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import style from '../Style.js';

export default class About extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/about.png')} style={{ width: 30, height: 30 }} />
        }
    }

    search() {
        this.props.navigation.navigate('Search');
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>À Propos de l'application</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint repudiandae nostrum consequatur dolores voluptatum. Obcaecati laboriosam recusandae itaque expedita debitis harum velit quibusdam ullam voluptatibus omnis, veritatis aperiam aliquam dolore voluptates ipsam iure magni!</Text>
                <Button color={style.color} onPress={() => this.search()} title="Rechercher une ville" />
            </View>

        );
    }
}