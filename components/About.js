import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class About extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/about.png')} style={{ width: 30, height: 30 }} />
        }
    }

    render() {
        return (
            <View style={style.style}>
                <Text style={style.title}>À Propos de l'application</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint repudiandae nostrum consequatur dolores voluptatum. Obcaecati laboriosam recusandae itaque expedita debitis harum velit quibusdam ullam voluptatibus omnis, veritatis aperiam aliquam dolore voluptates ipsam iure magni!</Text>
            </View>

        );
    }
}

const style = StyleSheet.create({
    style: {
        margin: 20,
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
        marginTop: 20
    }
})