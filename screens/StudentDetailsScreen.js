import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Header, Icon } from "react-native-elements";

export default class StudentDetailsScreen extends React.Component {
    render() {
        return (
            <View>
                <Header
                    leftComponent={<Icon name='arrow-left' type='font-awesome' color='#ffffff' onPress={() => this.props.navigation.goBack()} />}
                    centerComponent={{ text: 'Student Details', style: { color: '#ffffff', fontSize: 20, fontWeight: "bold", } }}
                    backgroundColor="#32867d"
                />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Student Details Screen!</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >Next</TouchableOpacity>
                </View>
            </View>
        )
    }
}