import { useContext } from 'react'
import { TodoItem } from './TodoItem'
import { TodoContext } from '../context/TodoContext'


export const TodoList = ({ todos }) => {

    const { onDeleteAllTodos } = useContext( TodoContext )

  return (

    <section className='list'>
        <h6 className="delete-all"  onClick={ ()=> onDeleteAllTodos()}>Borrar todo</h6>

        <ul className='list__todo'>
            {
                todos.map(({ id, description, done, createdAt }) => (
                    
                    <TodoItem 
                        key={ id }
                        id={ id } 
                        description={ description } 
                        done={ done } 
                        createdAt = { createdAt } 
                    />

                ))
            }
        </ul>
    </section>



  )
}
