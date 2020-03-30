import React, { Component } from 'react'
import {Alert, Text, View, StyleSheet ,Button} from 'react-native'

import { actionCreators } from '../Redux/TodoListRedux'
import store from '../Redux/store'

const styles = StyleSheet.create ({
    ButtonDellete: {
        marginLeft:30,
         width:100
    },
    ButtonDone: {
   
        width:100
   }
})

onRemoveTodo = (index) => {
    store.dispatch(actionCreators.remove(index))
  }
onDoneTodo = (saveChange,index) => {
    saveChange.status = true;
    store.dispatch(actionCreators.update(index,saveChange));
  }
const ItemComponent = (props) => {
   return (
      <View style={{ padding:10, justifyContent: 'center',marginLeft:20, alignItems: 'center',flexDirection:'row', flexWrap:'wrap' }} >
  <View style={{flex:3 , marginRight:10}} ><Text style={{color:'black'}} >{props.myState.name}</Text></View>

   <View style={{flex:2 , marginRight:10}} >
     
            <Button key={1} style={styles.ButtonDone} 
            title='Done'
            onPress={() => onDoneTodo(props.myState,props.keyNumber)}
            disabled={props.myState.status}
          />
      </View>
      <View style={{flex:2 , marginRight:10}} >
            <Button key={2} style={styles.ButtonDellete} 
            color="#FF3300"
            title='Delete'
            onPress={() => onRemoveTodo(props.keyNumber)}
          />
          </View>
      </View>
   )
}
export default ItemComponent

