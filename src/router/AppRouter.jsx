import { Navigate, Route, Routes } from "react-router-dom"
import { TodoApp } from "../TodoApp"
import { PendingTodos, CompletedTodos } from "../views"
import { Navbar } from "../components/Navbar"



export const AppRouter = () => {

  return (

    <section className="app ct">
        <Navbar />

        <Routes>
          <Route path="/" element={ <TodoApp /> } />
          <Route path="/pendingTodos" element={ <PendingTodos /> } />
          <Route path="/completeTodos" element={ <CompletedTodos /> } />
          <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    </section>
      
  
  )
}
