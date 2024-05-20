import { TodoContext } from "./TodoContext"
import { useTodo } from "../hooks"




export const TodoProvider = ({ children }) => {

  const { todos, dispatch, todosCount, todosCompleteCount, todosPendingCount, onNewTodo, onToggleTodo, onDeleteTodo, onDeleteAllTodos} = useTodo() 

  return (
    <TodoContext.Provider value={{ todos, dispatch, todosCount, todosCompleteCount, todosPendingCount, onNewTodo, onToggleTodo, onDeleteTodo, onDeleteAllTodos }}  >
        { children }
    </TodoContext.Provider>
  )
}
