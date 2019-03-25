import React, { Component } from 'react';
import { Router, Scene,Drawer } from 'react-native-router-flux';
import HomeIndex from './component/home/index';
import Another from './component/home/Another';
import Header from './component/shareComponent/header';
import NavigationDrawer from './component/shareComponent/Drawer';
import {StyleSheet,Text,View,TouchableOpacity,Image} from 'react-native';

export default class App extends Component {
   
   render(){
    return(
        <Router>
            <Scene key="root" >
            <Scene key="home"
              component={HomeIndex}
               navBar={Header}
               // title="home"
              initial
            />
            <Scene
              key="another"
              component={Another}
               // hideNavBar={true}
               // navBar={Header}
              // title="Another"
            />
           
                <Scene key='drawer' component={NavigationDrawer} open={false} >
                      <Scene key='drawerChildrenWrapper' > 
                
                        </Scene>
                </Scene>
          </Scene>
        </Router>
        // <View>
        // <Text>this is why?</Text>
        // </View>
        )
   }
}

// const style = Stylesheet.create({
//     header: {
//         alignItem:'center'
//     }
// })
