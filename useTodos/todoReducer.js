export const todoReducer = (state, action = {}) => {
  switch (action.type) {
    case 'Add':
      return [...state, action.payload]
    case 'Delete':
      return state.filter(todo => todo.id !== action.payload)
    case 'Done':
      return state.map(todo => {
        if (todo.id === action.payload) return { ...todo, done: !todo.done }
        return todo
      })
    default:
      return state
  }
}
