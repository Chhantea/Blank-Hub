import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import HomeScreen from './component/home/index' ;
import Another from './component/home/Another' ;
import ModalScreen from './component/shareComponent/modal/ModalScreen';
import DrawerMenu from './component/shareComponent/Drawer';

const MainNavigator = createStackNavigator(
    {
     Home: HomeScreen,
    Another:  Another,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            // headerStyle: {
            //     navBarHidden: true
            // },
            // headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                flex: 1
            },
        },
    }
);
const RootNavigator = createStackNavigator(
    {
        Main: {
            screen: MainNavigator,
        },
        MyModal: {
            screen: ModalScreen,
        },
        // drawer: MyDrawerNavigator
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);
const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: RootNavigator,
        navigatorStyle: { navBarHidden: true }
    },
    drawer: {
        screen: DrawerMenu,
        style: {
            leftDrawerWidth: 40,
        }
    },
});

const App = createAppContainer(MyDrawerNavigator);

export default App;
