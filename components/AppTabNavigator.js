import React from 'react';
import { AppStackNavigator } from './AppStackNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddStudentScreen from '../screens/AddStudentScreen';
import { Icon } from "react-native-elements";
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons, Ionicons } from 'react-native-vector-icons'

export const AppTabNavigator = createBottomTabNavigator({
    Home: {
        screen: AppStackNavigator,
        navigationOptions: {
            tabBarIcon: ({ focused, color }) => {
                let iconName;

                if (iconName === focused) {
                    color = 'red'
                }
                <Ionicons name='home' color={color} size={RFValue(15)} />
            },
        }
    },
    'Add Student': {
        screen: AddStudentScreen,
        navigationOptions: {
            tabBarIcon: ({ focused, color }) => {
                let iconName;

                if (iconName === focused) {
                    color = 'blue'
                }
                <MaterialIcons name='person-add' color={color} size={RFValue(15)} />
            },
        }
    }
});
