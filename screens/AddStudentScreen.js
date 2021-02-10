import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class AddStudentScreen extends React.Component {
    render() {
        return (
            <SafeAreaProvider>
                <MyHeader title='Add Student' navigation={this.props.navigation} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Add Student Screen!</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >
                        <Text>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaProvider >
        )
    }
}