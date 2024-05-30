import { useContext } from "react"
import { messageAddSucess, messageDuplicateError } from "../alerts/alerts"
import { useForm } from "../hooks"
import { TodoContext } from "../context/TodoContext"


export const TodoAddForm = () => {

  const { todos, onNewTodo } = useContext( TodoContext )

  
  const { description, onInputChange, onResetForm } = useForm({
      description: ''
  })

  const handleNewTodo = ( event ) => {

    event.preventDefault()

    const isDuplicated = todos.some( todo => todo.description === description )
        
    if( description.trim().length <= 1) return
    
    if( isDuplicated ) return messageDuplicateError()  

    onNewTodo( description )

    messageAddSucess()

    onResetForm()

}

  return (
        <form className="form-todo" onSubmit={ handleNewTodo }>
            <input className="form-todo__input"
                type="text" 
                placeholder='Añade una tarea... (máx. 35 letras)'
                maxLength="35"
                name='description'
                value={ description }
                onChange={ onInputChange }
            />
        </form>
  )
}
// 