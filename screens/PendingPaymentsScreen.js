import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MyHeader from '../components/MyHeader';

export default class PendingPaymentsScreen extends React.Component {
    render() {
        return (
            <SafeAreaProvider>
                <View>
                    <MyHeader title='Pending Payments' navigation={this.props.navigation} />
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Pending Payments Screen!</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Text>
                                Next
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaProvider>
        )
    }
}