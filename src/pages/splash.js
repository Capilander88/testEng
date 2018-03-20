import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    render() {
        return (
            <ImageBackground
                source={require('../assets/img/background.png')}
                style={styles.backgroundImg}
            >
            <Text style={styles.title}>TheTVDB</Text>
                <Text style={[styles.title, styles.marginBottom100]}>Effettua l'accesso</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                    placeholder={'Username'}
                    underlineColorAndroid={'transparent'}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    placeholder={'Password'}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonLabel}>Login</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImg: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '900',
        marginBottom: 15
    },
    marginBottom100: {
        marginBottom: 100,
    },
    textInput: {
        height: 40,
        width: '80%',
        borderRadius: 3,
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 10,
        backgroundColor: '#fff'
    },
    button: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 3,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#b6d415',
        width: '80%'
    },
    buttonLabel: {
        fontSize: 16,
        color: '#fff'
    },
});