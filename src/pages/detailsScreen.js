import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to home"
                    onPress={() => this.props.navigation.goBack()}
                />
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
});