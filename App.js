import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View,Alert,Image,ActivityIndicator,ScrollView,Picker, Button } from 'react-native';
import axios from 'axios';

export default class SectionListBasics extends Component {
    constructor(){
        super();
        this.state={
            data: [],
            image:'',
            isLoading: true
        }
    }
    componentDidMount(){
        axios.get('http://192.168.0.101:4000/api/cart').then(ress=>{
            this.setState({data: ress.data,isLoading: false});
            console.log(ress.data)
        }).catch(err=>{
            Alert.alert('Error!',err.message);
        })
    }
    _onPressButton(){
        console.log("asd");
    }
    render() {
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{flex:1}}>
                       <Image source={{uri: this.state.data[0].image }}
                              style={{width: 80, height: 80}}/>
                        </View>
                        <View style={{flex: 1}}>
                        <Text style={styles.h1}>{this.state.data[0].title}</Text>
                            <Button
                                onPress={this._onPressButton}
                                title="Press Me"
                                color="#841584"
                            />
                        </View>
                        <View style={styles.alignEnd}>
                        <Text>Qty:</Text>
                        <Picker
                            selectedValue={this.state.language}
                            style={{height: 30, width: 30,backgroundColor: 'grey'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                            <Picker.Item label="Add More" value="10" />
                        </Picker>
                        <Text>Price: ${this.state.data[0].price}</Text>
                        <Text>NetPrice: ${this.state.data[0].price}</Text>
                        </View>
                    </View>
                </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'row'

    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    h1:{
        fontSize:20,
        textAlign: 'center'
    },
    alignEnd: {
        flex: 1,
        // textAlign: 'right',
        // paddingTop: 22,
        justifyContent: 'center',
        alignItems: 'center',
    }
});