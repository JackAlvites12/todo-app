import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { TodoContext } from "../context/TodoContext"

export const Navbar = () => {

    const { todosCount, todosPendingCount, todosCompleteCount  } = useContext( TodoContext )

  return (
    <section className="nav">
        <h1 className="nav__title">Tareas</h1>

        <div className="nav__links">
            <NavLink to="/" className={ ({ isActive }) => `nav__link ${ isActive ? 'nav__link--active' : '' }` }>
                Todos ({ todosCount })
            </NavLink>
            
            <NavLink to="/pendingTodos" className={ ({ isActive }) => `nav__link ${ isActive ? 'nav__link--active' : '' }` }>
                Pendientes ({ todosPendingCount })
            </NavLink>

            <NavLink to="/completeTodos" className={ ({ isActive }) => `nav__link ${ isActive ? 'nav__link--active' : '' }` }>
                Completos ({ todosCompleteCount })
            </NavLink>
        </div>
    </section>

  )
}
