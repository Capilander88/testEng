import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };
    render() {
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const tvSerie = params ? params.tvSerie : null;

        return (
            <View style={styles.container}>
                <Text>{tvSerie}</Text>
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