import React from 'react';
import { Viex, TextInput, Image } from 'react-native';

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "Toulouse"
        }
    }

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/home.png')} style={{ width: 30, height: 30 }} />
        }
    }

    setCity(city) {
        this.setState({ city })
    }

    render() {
        return (
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={this.state.city}
                onChangeText={(text) => this.setCity(text)}
                />
        )
    }
}