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
   
export default class ActiveListCompoment extends React.Component {
      state = {
        myState: `Todos`,
        todos: []
    }

     UNSAFE_componentWillMount() {
         const {todos} = store.getState();
         this.setState(prevState => ({
          // object that we want to update
          ...prevState.myState,     // keep all other key-value pairs
          todos // update the value of specific key

          }))
          this.unsubscribe = store.subscribe(() => {
            const {todos} = store.getState()
            this.setState(prevState => ({
             // object that we want to update
             ...prevState.myState,     // keep all other key-value pairs
             todos       // update the value of specific key
             }))
          })
       console.log(this.state.todos);
     }
     componentWillUnmount() {
     }
     onAddTodo = (text) => {
      const add = {
          id:this.state.todos.length,
          status : false,
          name : text.nativeEvent.text.toString()
      }
      store.dispatch(actionCreators.add(add));
     }
render() {
  this.state.todos =  this.state.todos.filter(c=>c.status==false);
  return (
    <ScrollView>
      <View>
      <Text style = {styles.myHome}>todos</Text>
      </View>
      <TextInput
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
