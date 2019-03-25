import React,{ Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Header extends Component{
    constructor(){
        super();
        this.state={
            search: ''
        }
    }
    updateSearch = search => {
        this.setState({ search });
    };
	_onPressButton(){
		console.log("this is press")
	}
	render(){
        const { search } = this.state;
		return(
					<View style={style.container}>
                        <View >
                            <TouchableOpacity onPress={() => this.props.nav.toggleDrawer()} >
                                <Image
                                    source={{uri:'https://ebace.aero/wp-content/themes/EBACE2016/assets/hamburger.png'}}
                                    style={{ width: 45, height: 45}}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={style.title}>
                            <TextInput
                                style=
                                    {{
                                        height: 30, borderColor: 'gray', borderWidth: 1, color : "black",backgroundColor: 'white',paddingLeft: 5,
                                    }}
                                onChangeText={this.updateSearch}
                                value={this.state.search}
                                placeholder={'search....'}
                            />
                        </View>
                        <View style={style.rightIcon}>
                            <TouchableOpacity onPress={() => this.props.nav.toggleDrawer()} >
                                <Image
                                    source={{uri:'https://www.skylinetechnologies.com/SkylineTechnologies/media/DesignAssets/MiscIcons/Shopping-Cart-Icon2.png'}}
                                    style={{ width: 45, height: 45}}
                                />
                            </TouchableOpacity>
                        </View>
					</View>

			)
	}
}

const style = StyleSheet.create({
	container: {
		marginTop: 25,
		padding: 10,
		height: 70,
		flexDirection: 'row',
        backgroundColor: '#212121'

	},
	title: {
      flex: 4,
      paddingTop: 10,
        flexDirection: 'column'
    },
    rightIcon: {
        flex: 1,
        // paddingTop: 10,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'

    }

});