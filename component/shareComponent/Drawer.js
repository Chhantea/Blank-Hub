import React,{Component} from 'react';
import {View,Button} from 'react-native';

 class DrawerMenu extends Component {
    static navigationOptions = {
        // drawerLabel: 'Is this Drawer?',
        // drawerIcon: ({ tintColor }) => (
        //     <Image
        //         source={require('./notif-icon.png')}
        //         // style={[styles.icon, {tintColor: tintColor}]}
        //     />
        // ),

            header: null,
    };
    render() {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
            </View>
        );
    }
}

export default DrawerMenu;