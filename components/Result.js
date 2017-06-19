import React from 'react'
import { Text, ActivityIndicator, ListView, Image, View } from 'react-native';
import style from '../Style'
import WeatherRow from './weather/Row'

export default class Result extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo à ${navigation.state.params.city}`,
            tabBarIcon: () => {
                return <Image source={require('./icons/home.png')} style={{ width: 30, height: 30 }} />
            }
        }
    }



    constructor(props) {
        super(props)
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        }
        setTimeout(() => this.getWeatherFromApiAsync(), 1000)
    }


    getWeatherFromApiAsync() {
        return fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + this.state.city + '&mode=json&units=metric&appid=d82ce537f5b61d85d53557bad5a65ae1')
            .then((response) => response.json())
            .then((responseText) => {
                this.setState({ report: responseText })
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        if (this.state.report === null) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color={style.color} size="large" />
                </View >
            )
        } else {
            const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            return (
                // this.fetchWeather();
                <ListView
                    dataSource={ds.cloneWithRows(this.state.report.list)}
                    renderRow={(row, j, k) => <WeatherRow day={row} index={parseInt(k, 10)} />}
                    />
            )
        }
    }

}