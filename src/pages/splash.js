import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
    headerStyle: {
        display: 'none'
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
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <Text>Effettua l'accesso</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(username) => this.setState({ username })}
                            value={this.state.username}
                            placeholder={'Username'}
                        />
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                            placeholder={'Password'}
                        />
                        <Button
                            title="Login"
                            onPress={() => this.props.navigation.navigate('HomeScreen')}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3,
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 10
    }
});