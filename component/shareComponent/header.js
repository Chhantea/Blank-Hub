import React,{ Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code 

export default class Header extends Component{
	_onPressButton(){
		console.log("this is press")
	}
	render(){
		let img = {
			uri:'https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-512.png'
		}
		return(
				<View style={style.container}>
					<View style={style.content}>
					<Text  onPress={() => Actions.drawerOpen()} >this is header</Text>
					<TouchableOpacity onPress={() => Actions.drawer()}>
			          <Image
			            source={{uri:'https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-512.png'}}
			            style={{ width: 25, height: 25}}
			          />
        			</TouchableOpacity>
					</View>
				</View>
			)
	}
}

const style = StyleSheet.create({
	container: {
		marginTop: 20,
		padding: 10,
		height: 50

	},
	content: {
		flex: 1,
		alignItems: 'center'
	}

})