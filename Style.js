import { StyleSheet } from 'react-native';

const green = '#3BB8A2';

export default {
    color: green,
    containerGeneral: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null
    },
    container: {
        padding: 30,
        width: '100 %',
    },
    text: {
        fontSize: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: 'transparent',
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        borderColor: 'transparent',
        backgroundColor: 'rgba(255, 255, 255, .7)',
        borderWidth: 1,
        marginBottom: 30,
        paddingHorizontal: 10
    },
    // containerButton: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // height: null,
    //     // width: null
    // },
    button: {
        // flex: 1,
        textAlign: 'center',
        backgroundColor: green,
        fontSize: 18,
        height: 40,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 6,
        marginRight: 50,
        marginLeft: 50
        // marging: 10
        // justifyContent: 'center',
        // alignItems: 'center'
        // alignVertical: 'center'
    },
    header: {
        backgroundColor: green,
    },
    headerTitle: {
        color: 'white',
        fontSize: 22
    }
}