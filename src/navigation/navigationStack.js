import { StackNavigator } from 'react-navigation'
import HomeScreen from '../pages/homeScreen'
import DetailsScreen from '../pages/detailsScreen'

const Navigator = StackNavigator(
    {
        DetailsScreen: { screen: DetailsScreen },
        HomeScreen: { screen: HomeScreen },
    },
    {
        initialRouteName: 'HomeScreen',
        navigationOptions: {
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
)

export default Navigator