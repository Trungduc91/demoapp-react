// The types of actions that you can dispatch to modify the state of the store
export const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    UPDATE: 'UPDATE'
  }
  
  // Helper functions to dispatch actions, optionally with payloads
  export const actionCreators = {
    add: item => {
      return { type: types.ADD, payload: item }
    },
    remove: index => {
      return { type: types.REMOVE, payload: index }
    },
    update: (index,item) => {
        return { type: types.REMOVE, payload: (index,item) }
      },
  }
  
  // Initial state of the store
  const initialState = {
    todos:   [
        {
           id: 0,
           status:false,
           name: 'Ben'
        },
        {
           id: 1,
           status:false,
           name: 'Susan'
        },
        {
           id: 2,
           status:false,
           name: 'Robert'
        }
     ],
  }
  
  // Function to handle actions and update the state of the store.
  // Notes:
  // - The reducer must return a new state object. It must never modify
  //   the state object. State objects should be treated as immutable.
  // - We set \`state\` to our \`initialState\` by default. Redux will
  //   call reducer() with no state on startup, and we are expected to
  //   return the initial state of the app in this case.
  export const reducer = (state = initialState, action) => {
    const { todos } = state
    const { type, payload } = action
  
    switch (type) {
      case types.ADD: {
        return {
          ...state,
          todos: [payload, ...todos],
        }
      }
      case types.REMOVE: {
        return {
          ...state,
          todos: todos.filter((todo, i) => i !== payload),
        }
      }
      case types.UPDATE: {
        todos[payload.index] =  payload.item;
        return {
          ...state,
          todos: todos
        }
      }
    }
  
    return state
  }
  