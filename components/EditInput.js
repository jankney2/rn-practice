import React, { Component } from 'react';
import {View, TextInput} from 'react-native'


export default class EditInput extends Component {
    state = {  }
    render() {
        return (
    <View>

            <TextInput value='farowije'
            placeholder="hello there"
            style={this.props.style}
            />

    </View>        
        );
    }
}