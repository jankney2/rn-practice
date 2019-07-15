import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import Todo from "./Todo";
import { Button } from "react-native-elements";

let id = 0;
export default class TodoList extends Component {
  state = {
    todos: [
      {
        id: ++id,
        text: "get cheese",
        isComplete: false
      },
      {
        id: ++id,
        text: "get money",
        isComplete: false
      },
      {
        id: ++id,
        text: "get yoked",
        isComplete: false
      }
    ],
    showInput: false,
    inputVal: ""
  };

  removeTodo = id => {
    let newArr = [...this.state.todos];

    let index = this.state.todos.findIndex(el => {
      return el.id === id;
    });
    newArr.splice(index, 1);

    this.setState({
      todos: newArr
    });
  };

  editTodo = (id, newText) => {
    let newArr = [...this.state.todos];
    let index = this.state.todos.findIndex(el => {
      return el.id === id;
    });
    newArr[index].text = newText;

    this.setState({
      todos: newArr
    });
  };

  render() {
    let todoMapper = this.state.todos.map((el, i) => {
      return (
        <Todo
          text={el.text}
          key={i}
          edit={el.id}
          deleter={this.removeTodo}
          editor={this.editTodo}
          isComplete={el.isComplete}
        />
      );
    });
    return (
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
          <Text style={styles.header}>Todos</Text>
          {todoMapper}
          <TextInput
            autoFocus={false}
            placeholder="type todo info"
            value={this.state.inputVal}
            style={this.state.showInput ? styles.adder : styles.hidden}
            onSubmitEditing={() => {
              this.setState({
                todos: [
                  ...this.state.todos,
                  {
                    id: ++id,
                    text: this.state.inputVal,
                    isComplete: false
                  }
                ],
                showInput: false,
                inputVal: ""
              });
              Keyboard.dismiss();
            }}
            onChangeText={text => {
              this.setState({
                inputVal: text,
                id: ++id,
                isComplete: false
              });
            }}
          />

          <Button
            style={styles.ten}
            title="add todo"
            onPress={() => {
              if (!this.state.showInput) {
                this.setState({
                  showInput: true
                });
              } else {
                this.setState({
                  todos: [
                    ...this.state.todos,
                    {
                      id: ++id,
                      text: this.state.inputVal,
                      isComplete: false
                    }
                  ],
                  showInput: false,
                  inputVal: ""
                });
                Keyboard.dismiss();
              }
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  adder: {
    marginTop: 0,
    position: "absolute",
    textAlign: "center",
    fontSize: 26,
    // justifyContent:'center',
    height: 450,
    width: 300,
    // zIndex: 2,
    backgroundColor: "tomato", 
    borderRadius:10,
  },
  ten: {
    position:'relative',
    // position: "absolute", 
    // top:0,
    // fontSize: 30
  },
  container: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 10
  },
  hidden: {
    display: "none"
  },
  header: {
    fontSize: 36
  }
  
});
