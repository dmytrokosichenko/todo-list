import { useState } from 'react'
import styles from './TodoForm.module.css'

export default function TodoForm({ addTodoHandler }) {
  const [inputText, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodoHandler(inputText)
    setText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new ToDo"
          value={inputText}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
