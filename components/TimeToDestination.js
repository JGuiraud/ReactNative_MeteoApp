import React from 'react'
import { View, Text, Image, Button, TextInput, TouchableOpacity, Picker } from 'react-native'
import { StackNavigator } from 'react-navigation';
import style from '../Style.js';
import ResultGoogle from './ResultGoogle'



class TimeToDestination extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            depart: "",
            destination: "",
            locomotions: [{id: 1, label:"Voiture", loco:"driving"},{id: 2, label:"Vélo", loco:"biking"},{id: 3, label:"À pied", loco:"walking"}],
            selectedlocomotion: "driving"
        }
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: `Quel est le trafic ?`,
            tabBarIcon: () => {
                return <Image source={require('./icons/home.png')} style={{ width: 30, height: 30 }} />
            }
        }
    }


    setDepart(depart) {
        this.setState({ depart })
    }

    setDestination(destination) {
        this.setState({ destination })
    }

    setLocomotion(selectedlocomotion) {
        this.setState({ selectedlocomotion })
    }

    submit() {
        // console.log(this.state.locomotion)
        console.log(this.state.depart + ' | ' + this.state.destination + ' | ' + this.state.locomotion)
        this.props.navigation.navigate('ResultGoogle', {
            depart: this.state.depart,
            selectedlocomotion: this.state.selectedlocomotion,
            destination: this.state.destination,
        })
    }

    render() {
        let picker = this.state.locomotions.map((data) => <Picker.Item key={data.id} label={data.label} value={data.loco} /> )
        return (
            <Image source={require('./images/roadback.jpg')} style={style.containerGeneral}>
                <View style={style.container}>

                    <Text style={style.title}>Départ</Text>
                    <TextInput
                        style={style.input}
                        value={this.state.depart}
                        onChangeText={(text) => this.setDepart(text)}
                        />

                    <Text style={style.title}>Destination</Text>
                    <TextInput
                        style={style.input}
                        value={this.state.destination}
                        onChangeText={(text) => this.setDestination(text)}
                    />

                    <Picker
                        selectedValue={(this.state.selectedlocomotion)}
                        onValueChange={(itemValue) => this.setLocomotion(itemValue)}>
                            {picker}
                    </Picker>

                    <TouchableOpacity onPress={() => this.submit()}>
                        <Text style={style.button}>
                            Connaitre le trafic
                            </Text>

                    </TouchableOpacity>
                </View>
            </Image>
        )
    }

}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}

export default StackNavigator({
    TimeToDestination: { screen: TimeToDestination, navigationOptions },
    ResultGoogle: { screen: ResultGoogle, navigationOptions },
})