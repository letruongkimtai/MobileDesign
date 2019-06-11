import React from 'react';
import { 
    Text,
    StyleSheet
 } from 'react-native';
import {connect} from 'react-redux'

class Number extends React.Component {
    constructor(){
        super(props)
        console.log("Constructor");
    }

     render() {
         console.log("Number ",this.props.counter)
         return (
            <Text style={number.text}>{this.props.counter}</Text>
         );
     }
 }

 const mapStateToProps = state =>({
     counter:state.counter
 });

export default connect(mapStateToProps,null)(Number)

 const number = StyleSheet.create({
    text: {
        fontSize: 100,
        color: 'white',
        marginBottom: 90,
    },
 })