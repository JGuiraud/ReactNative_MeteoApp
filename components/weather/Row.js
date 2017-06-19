import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import moment from 'moment'
import 'moment/locale/fr'
import globalStyle from '../../Style'

moment.locale('fr')

export default class Row extends React.Component {

    static propTypes = {
        day: React.PropTypes.object,
        index: React.PropTypes.number
    }

    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
        )
    }

    date() {
        let day = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text style={[style.bold]}>{day}</Text>
        )
    }

    icon(size = 60) {
        const type = this.props.day.weather[0].main.toLowerCase()
        let image
        console.log(type)
        switch (type) {
            case 'clear':
                image = require('./icons/sun.png')
                break;
            case 'rain':
                image = require('./icons/cloudy.png')
                break
            default:
                image = require('./icons/cloudy.png')
                break;
        }
        return <Image source={image} style={{ width: size, height: size }} />
        // return <Text> {type} </Text>
    }


    render() {
        if (this.props.index === 0) {
            return (
                <View style={[style.view, style.firstView]}>
                    <View>
                        < Text style={{ color: 'white' }} > {this.day()} {this.date()}</Text>
                        {this.icon(90)}
                    </View>
                    <Text style={[style.temp, { fontSize: 40 }]}>{Math.round(this.props.day.temp.day)}°C</Text>
                </View >
            )
        } else {
            return (
                <View style={style.view}>
                    <View style={style.flex}>
                        {this.icon()}
                        < Text style={{ marginLeft: 10 }} > {this.day()} {this.date()}</Text>
                    </View>
                    <Text style={style.temp}>{Math.round(this.props.day.temp.day)}°C</Text>
                </View >
            )
        }
    }

}

const style = StyleSheet.create({
    white: {
        color: 'white'
    },
    bold: {
        fontWeight: 'bold'
    },
    blue: {
        color: '#3583a8'
    },
    firstView: {
        backgroundColor: '#3583a8'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around'
    },
    view: {
        backgroundColor: globalStyle.color,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#3583a8',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    temp: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    }
})