import React,{ Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,TextInput,Picker} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { Ionicons } from '@expo/vector-icons';

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
					<View style={style.contRow}>
                        <View >
                            <TouchableOpacity onPress={() => this.props.nav.toggleDrawer()} >
                                <Image
                                    source={{uri:'https://ebace.aero/wp-content/themes/EBACE2016/assets/hamburger.png'}}
                                    style={{ width: 50, height: 50}}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={style.title}>
                            <Text style={{color: 'white'}}>Title</Text>
                        </View>
                        <View style={style.rightIcon}>
                            <TouchableOpacity onPress={() => this.props.nav.toggleDrawer()} >
                                <Image
                                    source={{uri:'https://www.skylinetechnologies.com/SkylineTechnologies/media/DesignAssets/MiscIcons/Shopping-Cart-Icon2.png'}}
                                    style={{ width: 50, height: 50}}
                                />
                            </TouchableOpacity>
                        </View>
					</View>
                <View style={(style.contRow2)}>
                    {/*<View style={style.leftSearch}>*/}
                        {/*<TouchableOpacity onPress={() => this.props.nav.toggleDrawer()} >*/}
                            {/*<Text style={{color:'white'}}>Button</Text>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</View>*/}
                    <View style={style.searchSection}>
                        <Ionicons style={style.searchIcon} name="md-search" size={30} color="grey" />
                        <TextInput
                            style=
                                {style.input}
                            onChangeText={this.updateSearch}
                            value={this.state.search}
                            placeholder={'search....'}
                        />
                        <Picker
                            selectedValue={this.state.language}
                            icon={  <Ionicons  name="md-search" size={30} color="white" />}
                            style={{height: 40, width: 60,color:'white',backgroundColor:'grey'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                </View>
            </View>

			)
	}
}

const style = StyleSheet.create({
	container: {
		marginTop: 25,
        backgroundColor: '#212121',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,

	},
    contRow:{
        flexDirection: 'row',
        // padding: 10,
        // height: 70,
    },
    contRow2:{
        flexDirection: 'row',
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10
        // height: 70,
    },
	title: {
      flex: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    rightIcon: {
        flex: 1,
        // paddingTop: 10,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'

    },
    leftSearch: {
        flex: 1,
        // paddingTop: 10,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },searchIcon: {
        padding: 2
    },
    input: {
        flex: 1,
        paddingTop: 1,
        paddingRight: 1,
        paddingBottom: 1,
        paddingLeft: 5,
        backgroundColor: '#fff',
        color: '#424242',
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});