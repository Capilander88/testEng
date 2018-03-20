import { StackNavigator } from 'react-navigation'
import HomeScreen from '../pages/homeScreen'
import DetailsScreen from '../pages/detailsScreen'
import Splash from '../pages/splash'

const Navigator = StackNavigator(
    {
        DetailsScreen: { screen: DetailsScreen },
        HomeScreen: { screen: HomeScreen },
        Splash: { screen: Splash }
    },
    {
        initialRouteName: 'Splash',
        navigationOptions: {
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: '#b6d415',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            gesturesEnabled: false
        },
    }
)

export default Navigator