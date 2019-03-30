import {createStackNavigator, createAppContainer, createDrawerNavigator ,DrawerItems} from 'react-navigation';
import HomeScreen from './component/home/index' ;
import Another from './component/home/Another' ;
import ModalScreen from './component/shareComponent/modal/ModalScreen';
import Menu from './component/Menu';
import { Ionicons } from '@expo/vector-icons';
import Sidebar from './component/sideBar';
import Search from './component/Search/index';
import {View,ScrollView,Text,StyleSheet} from 'react-native';

const MainNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Another:  Another,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                // color: 'white',
                backgroundColor: '#212121'
            },
            // headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                // textAlign: 'center',
                // color: 'white',
                flex: 1
            },
            headerTintColor: 'white',
        },
    }
);
// const coustomDrawerStyle = (props)=>(
//     <View>
//         <DrawerItems {...props}/>
//     </View>
// )
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
    Menu: {
        screen: RootNavigator,
    },
    search: {screen: Search},
},{
    contentComponent: Sidebar
});

const App = createAppContainer(MyDrawerNavigator);

export default App;
