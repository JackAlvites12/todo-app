import { types } from "../types/types";


export const todoReducer = ( initialState = [], action = {} ) => {

    switch ( action.type ) {

        case types.addTodo:
            
            return [ action.payload, ...initialState ]
    
        case types.toggleTodo:

            return initialState.map( todo => {

                if( todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo
            })

        case types.deleteTodo: 

            return initialState.filter( todo => todo.id !== action.payload )

        case types.deleteAllTodos:
            
            return []

        default:

            return initialState
            
    }


}