import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export class IncreaseButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[button.holder, button.increase]} onPress={this.props.onPress}>
                <Text style={button.title}>Tăng</Text>
            </TouchableOpacity>
        )
    }
}

export class DecreaseButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[button.holder, button.decrease]} onPress={this.props.onPress}>
                <Text style={button.title}>Giảm</Text>
            </TouchableOpacity>
        )
    }
}

const button = StyleSheet.create({
    holder: {
        width: "80%",
        height: "10%",
        borderRadius: 5,
        marginBottom: 15,
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        marginTop: 10,
        textAlign:'center',
    },
    increase: {
        backgroundColor: "#13b840"
    },
    decrease: {
        backgroundColor: "#00A4B4",
    }

})