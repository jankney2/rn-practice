import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native'
import {CheckBox} from 'react-native-elements'

export default class Todo extends Component {
    state = {
        isComplete:this.props.isComplete, 
        text:this.props.text, 
        checked: false
      }
    render() {
        return (
            <View style={styles.contain}>
                <View>

                <CheckBox checked={this.state.checked} onPress={()=>{
                    this.setState({
                        isComplete:!this.state.isComplete, 
                        checked:!this.state.checked
                    })
                }} />
                </View>

                <Text style={this.state.isComplete ? styles.completed: styles.todoText}>{this.props.text}</Text>



            </View>
        );
    }
}


const styles= StyleSheet.create({
    checkboxStyle:{
        color:'red', 
        width: 20, 
        height:20, 
        backgroundColor:'green', 
 

    }, 
    todoText:{
        fontSize:18,
        // width: 20 
    }, 
    completed: {
        textDecorationLine:'line-through',
        fontSize:18,
        // width:20
    }, 
    contain:{
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center'
    }
})