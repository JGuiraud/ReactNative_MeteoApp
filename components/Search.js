import React from 'react';
import { View, TextInput, Image, Button, Text } from 'react-native';
import style from '../Style.js';
import { StackNavigator } from 'react-navigation';

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: "Toulouse"
        }
    }

    static navigationOptions = {
        title: 'Rechercher une ville',
        tabBarIcon: () => {
            return <Image source={require('./icons/home.png')} style={{ width: 30, height: 30 }} />
        }
    }

    setCity(city) {
        this.setState({ city })
    }

    submit() {
        console.log(this.props.navigation.navigate('Result', { city: this.state.city }));
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>Quel temps fait-il à : </Text>
                <TextInput
                    style={style.input}
                    value={this.state.city}
                    onChangeText={(text) => this.setCity(text)}
                    />
                <Button color={style.color} onPress={() => this.submit()} title="Rechercher" />
                <Text placeholder="test"></Text>
            </View>
        )
    }
}

export default StackNavigator({
    Search: { screen: Search },
    Result: { screen: Search }
})