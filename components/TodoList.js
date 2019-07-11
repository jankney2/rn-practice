import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Keyboard} from 'react-native'
import Todo from './Todo'
import {Button } from 'react-native-elements'

let id=0
export default class TodoList extends Component {
    state = { 
        todos:[
            {
                id:++id,
                text:'get cheese', 
                isComplete:false
                
            }, 
            {
                id:++id,
                text:'get money', 
                isComplete:false
                
            }, 
            {
                id:++id,
                text:'get yoked', 
                isComplete:false
                
            }, 
        ], 
        showInput:false, 
        inputVal:''
     }
    


    
    render() {
    
    let todoMapper=this.state.todos.map((el,i)=>{
        return <Todo text={el.text} key={i} update={el.id} isComplete={el.isComplete}/>
    })
        return (

            <KeyboardAvoidingView behavior='position'>

            <View style={styles.container}>

<Text>Todo List</Text>
                {todoMapper}
            <TextInput placeholder='type todo info' value={this.state.inputVal} style={this.state.showInput?styles.adder : styles.hidden}  onChangeText={(text)=>{
                this.setState({
                    inputVal:text, 
                    id:++id, 
                    isComplete: false
                })
            }} />


                <Button title="add todo" onPress={()=>{
                    if(!this.state.showInput){
                        this.setState({
                            showInput:true
                        })

                    }else {

                        this.setState({
                            todos:[...this.state.todos, {
                                id:++id, 
                                text:this.state.inputVal, 
                                isComplete:false
                            } ],
                            showInput:false, 
                            inputVal:''
                        })
                        Keyboard.dismiss()
                    }
                }} />

            </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles= StyleSheet.create({
    adder: {
        position:'absolute',
        top:50,
        // padding:50, 
        backgroundColor:'yellow'
    }, 
    container: {
        padding:10
    }, 
    hidden: {
        display: 'none'
    }
})