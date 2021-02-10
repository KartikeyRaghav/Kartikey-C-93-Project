import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MyHeader from '../components/MyHeader';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <MyHeader title='Home' navigation={this.props.navigation} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Home Screen!</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('StudentDetails')} >
                        <Text>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}