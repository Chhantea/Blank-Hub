import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View,Alert } from 'react-native';
import axios from 'axios';

export default class SectionListBasics extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
        axios.get('http://localhost:4000/api/cart').then(ress=>{
            console.log(ress.data);
        }).catch(err=>{
            console.log('error', err.message);
            Alert.alert('Error!',err.message);
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
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
})