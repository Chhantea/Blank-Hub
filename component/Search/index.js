import React,{Component} from 'react';
import {View,Text,Button,TouchableOpacity,StyleSheet,ScrollView,Image} from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import NavButton from '../shareComponent/NavButton';
import SearchHeader from '../shareComponent/searchHeader';


export default class Search extends Component{
    // static navigationOptions = ({navigation})=> ({
    //     header: <SearchHeader/>,
    //     headerStyle: {
    //         backgroundColor: "transparent"
    //     }
    //     //    navigation <--- same as this.props
    //     // headerTitle: <SearchHeader/>,
    //     // headerRight: (
    //     //     <NavButton
    //     //     button={["search","cart"]}
    //     //     nav={navigation}
    //     //     />
    //     // ),
    //     // headerTitleStyle: {
    //     //     flex:4,
    //     //     flexDirection: 'row'
    //     // },
    // });
    render(){
        return(
            <View>
                <View>
                    <SearchHeader/>
                </View>
                <Text>This is search</Text>
            </View>
        )
    }
}