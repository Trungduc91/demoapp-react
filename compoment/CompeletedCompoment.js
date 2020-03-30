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
   
export default class CompeletedCompoment extends React.Component {
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

render() {
  this.state.todos =  this.state.todos.filter(c=>c.status==true);
  return (
    <ScrollView>
      <View>
      <Text style = {styles.myHome}>todos</Text>
      </View>
  
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
