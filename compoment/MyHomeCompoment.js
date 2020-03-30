import React from 'react';
import { View, Text, Image, ScrollView, TextInput,StyleSheet,TouchableOpacity,Button,Alert  } from 'react-native';
import ItemComponent from './ItemCompoment';

import { actionCreators } from '../Redux/TodoListRedux'
import store from '../Redux/store'
const styles = StyleSheet.create ({
    myHome: {
       marginTop: 20,
       textAlign: 'center',
       color: '#FF6699',
       fontWeight: 'bold',
       fontSize: 50
    },
    viewListChild: {
      marginTop: 20,
      marginLeft:20,
      marginRight:20,
      borderColor: '#ccc',
      borderWidth: 0.5,

      alignItems: 'flex-end'
    //  height:500,
    }
  })
   
export default class MyHomeCompoment extends React.Component {
    state = {
        myState: `Todos`,
        todos: []
     }
     UNSAFE_componentWillMount() {
       const {todos} = store.getState()
       this.setState(prevState => ({
            ...prevState.myState,  
            todos 
    }))
   
       this.unsubscribe = store.subscribe(() => {
         const {todos} = store.getState()
         this.setState(prevState => ({
          // object that we want to update
          ...prevState.myState,     // keep all other key-value pairs
          todos       // update the value of specific key

          }))
       })
     }
     componentWillUnmount() {
     //  this.state.unsubscribe()
     }
     onAddTodo = (text) => {
      const add = {
          id:this.state.todos.length,
          status : false,
          name : text.nativeEvent.text.toString()
      }
      this.textInput.clear()
      store.dispatch(actionCreators.add(add))
     }
     onRemoveTodo = (index) => {
       store.dispatch(actionCreators.remove(index))
     } 
render() {
  return (
    <ScrollView>
      <View>
      <Text style = {styles.myHome}>todos</Text>
      </View>
      <TextInput 
          ref={input => { this.textInput = input }}
        style={{
          marginTop:10,
          marginRight:10,
          marginLeft:10,
          height: 60,
          borderColor: '#ccc',
          borderWidth: 0.5
        }}
        placeholder="What need to be done ..."
        onSubmitEditing={this.onAddTodo}
        clearButtonMode="always"
      />
    <View style = {styles.viewListChild} >
        {
         this.state.todos.map((item, index) => (
          <ItemComponent myState = {item}  keyNumber={index}/>
            ))
        }
    </View>
    </ScrollView>
    );
}


}
