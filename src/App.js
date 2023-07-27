import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm/TodoForm'
import TodoList from './components/Todos/TodoList/TodoList'
import TodoActions from './components/Todos/TodoActions/TodoActions'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (newText) => {
    const newTodo = {
      id: uuidv4(),
      text: newText,
      isCompleted: false,
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>To do App</h1>
      <TodoForm addTodoHandler={addTodoHandler} />
      {!!todos.length && (
        <TodoActions
          completedTodoExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!!completedTodosCount && (
        <h2>{`You have copleted ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  )
}

export default App
