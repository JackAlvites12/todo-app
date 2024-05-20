import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { TodoAddForm, TodoList } from "../components"

import { MessageDynamic } from "../components/MessageDynamic"


export const CompletedTodos = () => {

  const { todos, todosCompleteCount } = useContext( TodoContext )

  const completeTodos = todos.filter( todo => todo.done === true )
  

  return (

    <>

        <TodoAddForm />

        {
          ( todosCompleteCount === 0 ) ? <MessageDynamic message="No hay ninguna tarea completa."/> : <TodoList todos={ completeTodos }/>

        }
    
    </>

        
  )
}
