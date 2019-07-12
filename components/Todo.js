import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { CheckBox} from 
"react-native-elements";
import EditInput from './EditInput'
import Icon from "react-native-vector-icons/EvilIcons";

const trash = <Icon name="trash" size={30} color="#900" />
const editIcon= <Icon name='pencil' size={30} color='#900'/>

export default class Todo extends Component {
  state = {
    isComplete: this.props.isComplete,
    text: this.props.text,
    checked: false, 
    editing:false
  };
  render() {
    return (
      <View style={styles.contain}>
        <View>
          <CheckBox
            checked={this.state.checked}
            onPress={() => {
              this.setState({
                isComplete: !this.state.isComplete,
                checked: !this.state.checked
              });
            }}
          />
        </View>

        <Text
          style={this.state.isComplete ? styles.completed : styles.todoText}
        >
          {this.props.text}
        </Text>

        <Text onPress={()=>{
            this.props.deleter(this.props.edit)
        }}>{trash}</Text>
        <Text onPress={()=>{
            this.setState({
                editing:!this.state.editing
            })
        }}>{editIcon}</Text>


        <EditInput style={this.state.editing ? null:styles.hidden}/>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  checkboxStyle: {
    color: "red",
    width: 20,
    height: 20,
    backgroundColor: "green"
  },
  todoText: {
    fontSize: 18
    // width: 20
  },
  completed: {
    textDecorationLine: "line-through",
    fontSize: 18
    // width:20
  },
  contain: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }, 
  hidden:{
      display:'none'
  }
 
});
