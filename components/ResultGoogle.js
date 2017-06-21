import React from 'react'
import { Text, ActivityIndicator, ListView, Image, View } from 'react-native';
import style from '../Style'
import TimeToDestination from './TimeToDestination'



export default class ResultGoogle extends React.Component {


    static navigationOptions = ({navigation}) => {
        return {
            title: `Trafic entre machin et bidule`,
            tabBarIcon: () => {
                return <Image source={require('./icons/home.png')} style={{ width: 30, height: 30 }} />
            }
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            depart: this.props.navigation.state.params.depart,
            destination: this.props.navigation.state.params.destination
        }
    }

    // getTrafficFromGoogle() {
    //     return fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.state.city + '&mode=json&units=metric&appid=d82ce537f5b61d85d53557bad5a65ae1&cnt=16')
    //         .then((response) => response.json())
    //         .then((responseText) => {
    //             this.setState({ report: responseText })
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    render() {
        return (
            <View>
                <Text>{this.state.depart}</Text>
                <Text>{this.state.selectedlocomotion}</Text>
                <Text>{this.state.destination}</Text>
            </View>
        )
    }

}
