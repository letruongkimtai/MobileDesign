import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground
} from 'react-native';
import {IncreaseButton,DecreaseButton} from './components/Buttons';
import Number from './components/Number'
import * as actions from './actions'
import {connect} from 'react-redux'

class Main extends Component {
    constructor(props){
        super(props)
    }


    //function
    handleIncreasePress = ()=>{
        this.props.increase(); //calling action from ./actions/index.js
    }
    handleDecreasePress = ()=>{
        this.props.decrease();
    }

    render() {
        return (
            <ImageBackground style={styles.backGround} source={require('./assets/images/background.png')}>
                <View style={styles.counterHolder}>
                    <Number/>
                    <IncreaseButton onPress = {this.handleIncreasePress}/>
                    <DecreaseButton onPress = {this.handleDecreasePress}/>
                </View>
            </ImageBackground>
        );
    }
}
export default connect(null,actions)(Main);//connect action to main component


const styles = StyleSheet.create({
    backGround: {
        height: "100%",
        width: "100%",
        flex: 1,
    },
    counterHolder: {
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: 'center',
        marginTop: 70,
    },
})