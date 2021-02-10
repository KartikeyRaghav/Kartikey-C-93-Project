import React from 'react';
import { AppTabNavigator } from "./components/AppTabNavigator";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import WelcomeScreen from "./screens/WelcomeScreen";
import AboutApp from "./screens/AboutApp";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

const switchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  BottomTab: { screen: AppTabNavigator },
  Drawer: { screen: AppDrawerNavigator },
  About: { screen: AboutApp },
})

const AppContainer = createAppContainer(switchNavigator)