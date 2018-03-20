import React from 'react';
import { View, Text, Button, StyleSheet, TouchableHighlight, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Drawer from 'react-native-drawer'

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {}
        return {
            title: 'Home',
            headerLeft: (
                <View>
                    <TouchableHighlight>
                        <Text style={{ fontSize: 30, marginLeft: 10 }} onPress={params.toggleDrawer}>
                            =
                    </Text>
                    </TouchableHighlight>
                </View>
            ),
        }
    }


    constructor(props) {
        super(props);
        this.state = {
            serieInput: '',
            showResults: false
        };
    }
    // Gestione apri/chiudi drawer
    componentDidMount() {
        this.props.navigation.setParams({ toggleDrawer: this.toggleControlPanel })
    }

    toggleControlPanel = () => {
        this._drawer.toggle()
    }
    // Fine gestione drawer
    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                tweenHandler={(ratio) => ({
                    main: { opacity: (2 - ratio) / 2 }
                })}
                content={
                    <View style={{backgroundColor: '#fff', height: '100%'}}>
                        <Text onPress={() => this.props.navigation.navigate('SplashScreen')}>Logout</Text>
                    </View>
                }>
                <View style={{ flex: 1 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={styles.container}>
                            <Text style={styles.title}>Serie TV</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(serieInput) => this.setState({ serieInput })}
                                value={this.state.serieInput}
                                placeholder={'Ricerca per nome'}
                            />
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.setState({ showResults: true })}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.buttonLabel}>Cerca</Text>
                            </TouchableOpacity>
                            {/* Lista risultati visibile solo dopo ricerca */}
                            {this.state.showResults &&
                                <View>
                                    <Text style={styles.title}>Risultati per {this.state.serieInput}</Text>
                                    {/* Elemento su cui ciclare */}
                                    <View style={[styles.result, styles.row]}>
                                        <View style={styles.width50}>
                                            <Text style={styles.title}>HTGAWM</Text>
                                            <Image
                                                style={styles.serieImage}
                                                source={require('../assets/img/movie1.jpg')}
                                            />
                                        </View>
                                        <View style={[styles.width50, styles.alignRight]}>
                                            <Text>5 stagioni</Text>
                                            <Text style={styles.goToDetails}
                                                onPress={() => {
                                                    this.props.navigation.navigate('DetailsScreen', {
                                                        itemId: 1,
                                                        tvSerie: 'How to get away with murder',
                                                    });
                                                }}
                                            >Dettagli</Text>
                                        </View>
                                    </View>

                                    {/* Elemento su cui ciclare */}
                                    <View style={[styles.result, styles.row]}>
                                        <View style={styles.width50}>
                                            <Text style={styles.title}>Breaking Bad</Text>
                                            <Image
                                                style={styles.serieImage}
                                                source={require('../assets/img/movie2.jpg')}
                                            />
                                        </View>
                                        <View style={[styles.width50, styles.alignRight]}>
                                            <Text>6 stagioni</Text>
                                            <Text style={styles.goToDetails}
                                                onPress={() => {
                                                    this.props.navigation.navigate('DetailsScreen', {
                                                        itemId: 2,
                                                        tvSerie: 'Breaking Bad',
                                                    });
                                                }}
                                            >Dettagli</Text>
                                        </View>
                                    </View>

                                    {/* Elemento su cui ciclare */}
                                    <View style={[styles.result, styles.row]}>
                                        <View style={styles.width50}>
                                            <Text style={styles.title}>Stranger Things</Text>
                                            <Image
                                                style={styles.serieImage}
                                                source={require('../assets/img/movie3.jpg')}
                                            />
                                        </View>
                                        <View style={[styles.width50, styles.alignRight]}>
                                            <Text>2 stagioni</Text>
                                            <Text style={styles.goToDetails}
                                                onPress={() => {
                                                    this.props.navigation.navigate('DetailsScreen', {
                                                        itemId: 3,
                                                        tvSerie: 'Stranger Things',
                                                    });
                                                }}
                                            >Dettagli</Text>
                                        </View>
                                    </View>

                                    {/* Elemento su cui ciclare */}
                                    <View style={[styles.result, styles.row]}>
                                        <View style={styles.width50}>
                                            <Text style={styles.title}>Mr Robot</Text>
                                            <Image
                                                style={styles.serieImage}
                                                source={require('../assets/img/movie4.jpg')}
                                            />
                                        </View>
                                        <View style={[styles.width50, styles.alignRight]}>
                                            <Text>2 stagioni</Text>
                                            <Text style={styles.goToDetails}
                                                onPress={() => {
                                                    this.props.navigation.navigate('DetailsScreen', {
                                                        itemId: 4,
                                                        tvSerie: 'Mr Robot',
                                                    });
                                                }}
                                            >Dettagli</Text>
                                        </View>
                                    </View>
                                </View>
                            }
                        </View>
                    </ScrollView>
                </View>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
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
        marginBottom: 10,
        paddingLeft: 10
    },
    row: {
        flexDirection: 'row',
    },
    result: {
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#f7f7f7',
        marginTop: 5,
    },
    width50: {
        width: '50%'
    },
    alignRight: {
        alignItems: 'flex-end',
        paddingTop: 50
    },
    title: {
        fontWeight: '900',
        textAlign: 'center',
    },
    goToDetails: {
        color: '#b6d415',
        fontWeight: '900',
        fontSize: 16,
    },
    serieImage: {
        width: 100,
        height: 60,
        marginTop: 10
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
        marginBottom: 20,
        backgroundColor: '#b6d415',
        width: '80%'
    },
    buttonLabel: {
        fontSize: 16,
        color: '#fff'
    },
});