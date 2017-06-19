import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class About extends React.Component {

    render() {
        return (
            <View style={style.style}>
                <Text style={style.title}>À Propos</Text>
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