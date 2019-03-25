import React,{Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image} from 'react-native';
import { Drawer } from 'react-native-router-flux';

export default class NavigationDrawer extends Component {

  render () {
    const state = this.props.navigationState
    const children = state.children
    return (
      <Drawer
        ref='navigation'
        type='static'
        open={state.open}
        acceptPan
        onOpen={() => NavigationActions.refresh({key: state.key, open: true})}
        onClose={() => NavigationActions.refresh({key: state.key, open: false})}
        content={<DrawerContent />}
        styles={Styles}
        captureGestures
        tapToClose
        openDrawerOffset={100}
        panCloseMask={0.8}
        panThreshold={150}
        negotiatePan
        tweenHandler={Drawer.tweenPresets.parallax}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}