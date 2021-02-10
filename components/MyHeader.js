import React, { Component } from 'react';
import { Header, Icon } from 'react-native-elements';
import { DrawerActions } from "react-navigation-drawer";

export default class MyHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Header
                leftComponent={<Icon name='bars' type='font-awesome' color='#ffffff' onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())} />}
                centerComponent={{ text: this.props.title, style: { color: '#ffffff', fontSize: 20, fontWeight: "bold", } }}
                backgroundColor="#32867d"
            />
        )
    }
}