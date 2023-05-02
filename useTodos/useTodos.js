import { useEffect, useReducer } from "react"
import { todoReducer } from "../todoReducer"

export const useTodos = () => {

    const initialState = []
    //Recuperar del local storage
    const init = () =>{
        return JSON.parse( localStorage.getItem('todos') ) || []
    }

// -----------------------------------------------------------------------------//

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init)
    //Guardar en el local storage con los nuevos datos
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
    
    const handleNewTodo = (todo) => {
        //se crea la accion
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        //se envia la accion para agregarla 
        dispatch( action );
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        }
        dispatch( action );
    }

    const handleToogleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }
        dispatch( action ); 
    }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=> !todo.done).length,
    handleDeleteTodo,
    handleToogleTodo,
    handleNewTodo,
    
  }
}
