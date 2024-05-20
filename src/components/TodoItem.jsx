import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const TodoItem = ({ id, description, done, createdAt }) => {

   const { onToggleTodo, onDeleteTodo } = useContext( TodoContext ) 

  return (
    <>
      <li className="list__item">

          <button className={`list__item__btn-complete ${ done ? 'list__item__btn-complete--yes' : '' }`} onClick={ () => onToggleTodo( id ) }><box-icon name='check' color="white"></box-icon></button>  

          <div className="list__item__description">
            <span className="description__date">{ createdAt }</span>
            <p className={`description__paragraph ${ done ? 'tached' : '' }`}>{ description }</p> 
          </div>

          <button className="list__item__btn-delete" onClick={ () => onDeleteTodo( id ) }><box-icon name="trash" color="white" animation="tada-hover"></box-icon></button>


      </li>
    </>
  )

}
