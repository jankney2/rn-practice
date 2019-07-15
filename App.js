import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>To Dos</Text>
<TodoList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ddae0',
    justifyContent:'center',
    alignItems:'center'


  },
});
