import React, {Component} from "react";
import { Text, View } from "react-native";

import Home_Page from "./screens/Home_Page";
import Upcoming_Events from "./screens/Upcoming_Events";
import Past_Deeds from "./screens/Past_Deeds";

import {createAppContainer, createSwitchNavigator} from "react-navigation";

export default class App extends Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  Home_Page: Home_Page,
  Upcoming_Events: Upcoming_Events,
  Past_Deeds: Past_Deeds
})

const AppContainer = createAppContainer(AppNavigator)