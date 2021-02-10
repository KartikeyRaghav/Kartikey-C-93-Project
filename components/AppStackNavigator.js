import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import StudentDetailsScreen from '../screens/StudentDetailsScreen';

export const AppStackNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    StudentDetails: {
        screen: StudentDetailsScreen,
        navigationOptions: {
            headerShown: false
        }
    }
},
    {
        initialRouteName: 'Home'
    }
);
