import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from "react-native";

export default class WelcomeScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{
                    backgroundColor: 'yellow',
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 40,
                    textAlign: 'center'
                }} >
                    WELCOME<br />The Attendance App
                </Text>
                <View style={{
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}>
                    <TouchableOpacity style={{
                        margin: 10,
                        borderWidth: 2,
                        borderRadius: 3,
                        backgroundColor: 'black',
                    }} onPress={() => this.props.navigation.navigate('About')}>
                        <Text style={{
                            padding: 2,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 20
                        }}>
                            About App
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        margin: 10,
                        borderWidth: 2,
                        borderRadius: 3,
                        backgroundColor: 'black',
                    }} onPress={() => this.props.navigation.navigate('BottomTab')}>
                        <Text style={{
                            padding: 2,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 20
                        }} >
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
