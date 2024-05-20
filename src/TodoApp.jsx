
import { useContext } from 'react'
import { TodoAddForm, TodoList } from './components'
import { TodoContext } from './context/TodoContext'
import { MessageDynamic } from './components/MessageDynamic'


export const TodoApp = () => {
  
  const { todos, todosCount, onDeleteAllTodos } = useContext( TodoContext )

  return (

    <>
      <TodoAddForm />
      
      {
        ( todosCount === 0 ) ? <MessageDynamic message="Lista vacía, agregue una tarea."/> : <TodoList todos={ todos }/>
      }

    </>

  )
}
