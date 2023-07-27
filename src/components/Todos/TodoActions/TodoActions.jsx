import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri'
import styles from './TodoActions.module.css'
import Button from '../../UI/Button'
export default function TodoActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodoExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear complited todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodoExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}
