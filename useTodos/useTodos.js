import { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
  // El tercer argumento es para correr algo para iniciar el estado
  const [todos, dispath] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: 'Add',
      payload: todo
    }

    dispath(action)
  }

  const handleDeleteTodo = (todoId) => {
    const action = {
      type: 'Delete',
      payload: todoId
    }

    dispath(action)
  }

  const handleTodoDone = (id) => {
    const action = {
      type: 'Done',
      payload: id
    }

    dispath(action)
  }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleTodoDone,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => todo.done).length
  }
}
