import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { TodoAddForm, TodoList } from "../components"
import { MessageDynamic } from "../components/MessageDynamic"


export const PendingTodos = () => {

    const { todos, todosPendingCount } = useContext( TodoContext )

    const pendingTodos = todos.filter( todo => todo.done === false )

  return (
    <>

        <TodoAddForm />

        {
            ( todosPendingCount === 0 ) ?  <MessageDynamic message="No hay ninguna tarea pendiente."/> : <TodoList todos={ pendingTodos }/>

        }

    </>
  )
}
