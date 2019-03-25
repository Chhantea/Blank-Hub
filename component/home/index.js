import React,{Component} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';
export default class HomeIndex extends Component {
    static navigationOptions = {
        title: 'Home',
        headerRight: (
            <View style={{flexDirection: 'row'}}>
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
            />
                <Button
                    onPress={() => alert('This is another button!')}
                    title="Another"
                />
            </View>

        ),
    };
	render(){
		return(
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