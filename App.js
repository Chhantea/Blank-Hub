import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './component/home/index' ;
import Another from './component/home/Another' ;

const MainNavigator = createStackNavigator(
    {
     Home: HomeScreen,
    Another:  Another,
    },
    {
        initialRouteName: "Home"
    }
);

const App = createAppContainer(MainNavigator);

export default App;
