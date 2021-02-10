import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import { DrawerItems } from "react-navigation-drawer";

export default class CustomSideBarMenu extends Component {
    render() {
        return (
            <View>
                <View style={{ flex: 0.6 }}>
                    <DrawerItems {...this.props} />
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                    Close Drawer
                </TouchableOpacity>
            </View>
        )
    }
}
