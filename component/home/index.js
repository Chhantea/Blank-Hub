import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
export default class HomeIndex extends Component {
	render(){
		return(
		<View style={styles.container}>
	      <Text
	        style={styles.welcome}
	        onPress={() => Actions.another()} // New Code
	      >
	        Home Screen is this
	      </Text>
         </View>
			)
	}
}

const styles = StyleSheet.create({
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