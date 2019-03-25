import React,{Component} from 'react';
import {StyleSheet,Text,View,Button,ScrollView} from 'react-native';
import  Header from '.././shareComponent/header';

export default class HomeIndex extends Component {
    // static navigationOptions = {
    //     headerTitle: <Header/>,
    //     // headerRight: (
    //     //     <View style={{flexDirection: 'row'}}>
    //     //     <Button
    //     //         onPress={() => alert('This is a button!')}
    //     //         title="Info"
    //     //     />
    //     //         <Button
    //     //             onPress={() => alert('This is another button!')}
    //     //             title="Another"
    //     //         />
    //     //     </View>
    //     //
    //     // ),
    // };
    static navigationOptions = {
        header: null,
    };
	render(){
		return(
		    <View >
                <Header
                nav = {this.props.navigation}
                />
                <ScrollView >
                    <View style={styles.container}>
                  <Text
                    style={styles.welcome}
                   // New Code
                      onPress={()=>this.props.navigation.navigate('Another')}
                  >
                    Home Screen is this
                  </Text>
                    <Button
                        title="Go to Details"
                        onPress={() => {
                            /* 1. Navigate to the Details route with params */
                            this.props.navigation.navigate('Another', {
                                itemId: 86,
                                otherParam: 'anything you want here',
                            });
                        }}
                    />
                    <Button
                    title="drwaer"
                    onPress={()=>this.props.navigation.toggleDrawer()}
                    />
                    </View>
                 </ScrollView>
            </View>
			)
	}
}

const styles = StyleSheet.create({
    main: {

    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});