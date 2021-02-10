import React, { Component } from 'react';
import MyHeader from '../components/MyHeader';
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class AboutApp extends Component {
    render() {
        return (
            <SafeAreaProvider>
                <MyHeader title='About App' navigation={this.props.navigation} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text>
                        This page displays about the app.
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('BottomTab')}>
                        <Text>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaProvider>
        )
    }
}
