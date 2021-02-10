import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import PendingPaymentsScreen from "../screens/PendingPaymentsScreen";
import { MaterialIcons, Ionicons } from 'react-native-vector-icons'
import CustomSideBarMenu from './CustomSideBarMenu'
import { RFValue } from "react-native-responsive-fontsize";
import AboutApp from '../screens/AboutApp';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator,
        navigationOptions: {
            drawerIcon: <Ionicons name="home" size={RFValue(15)} />
        }
    },
    Pending: {
        screen: PendingPaymentsScreen,
        navigationOptions: {
            drawerIcon: <MaterialIcons name='payment' size={RFValue(15)} />
        }
    },
    'About App':{
        screen: AboutApp,
        navigationOptions: {
            drawerIcon: <Ionicons name='apps' size={RFValue(15)} />
        }
    }
},
    {
        customComponent: CustomSideBarMenu
    },
    {
        initialRouteName: 'Home'
    })
