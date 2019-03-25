import React,{Component} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';

export default class Another extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: 'Another',
        headerRight: (
            <Button
                onPress={() => this.props.navigation.navigate('MyModal')}
                title="Info"
            />
        ),
    };
	render(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');
		return(
		<View style={styles.container}>
	      <Text
	        style={styles.welcome}
	        onPress={() => this.props.navigation.navigate('Home')}
	      >
	        Scarlet Screen
	      </Text>
            <Button
                title="Go to Details... again"
                onPress={() => this.props.navigation.push('Another')}
            />
            <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
                title="Go modal"
                onPress={() => this.props.navigation.navigate('MyModal')}
            />

            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
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