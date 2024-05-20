import { useEffect, useReducer } from 'react'
import { todoReducer } from '../reducer/todoReducer'
import { types } from '../types/types'
import { deleteAllTodosPromise, deleteTodoPromise, messageDeleteSucess } from '../alerts/alerts'
import { v4 as uuid } from 'uuid';


const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || []
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init )


    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [ todos ])


    const todosCount = todos.length
    const todosCompleteCount = todos.filter( todo => todo.done === true ).length
    const todosPendingCount = todos.filter( todo => todo.done === false ).length


    const onNewTodo = ( description ) => {

        const newTodo = {
            id: uuid(),
            description,
            done: false,
            createdAt: new Date().toLocaleDateString('es-ES'),
        }

        dispatch({
            type: types.addTodo,
            payload: newTodo,
        })
        
    } 

    const onToggleTodo = ( id ) => {

        dispatch({
            type: types.toggleTodo,
            payload: id,
        })

    }

    const onDeleteTodo = ( id ) => {

        deleteTodoPromise().then( result => {

            if ( result.isConfirmed ) {

                dispatch({
                    type: types.deleteTodo,
                    payload: id,
                })

                messageDeleteSucess()
     
            }
        })

    }

    const onDeleteAllTodos = () => {
        
        deleteAllTodosPromise().then( result => {

            if ( result.isConfirmed ) {

                dispatch({
                    type: '[TODO] delete all',
                })

                messageDeleteSucess()
     
            }
        })



    }


    return {
        todos,
        dispatch,
        todosCount,
        todosCompleteCount,
        todosPendingCount,
        onNewTodo,
        onToggleTodo,
        onDeleteTodo,
        onDeleteAllTodos,
    }
  
}
