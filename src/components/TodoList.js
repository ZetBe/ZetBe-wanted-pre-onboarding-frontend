import { useRef, useState } from 'react'
import { Form } from 'react-router-dom'

function TodoList({ todos }) {
  const input = useRef('')
  const [click, setClick] = useState(false)
  const [number, setNumber] = useState()

  const modifyForm = (event, id) => {
    event.preventDefault()
    setClick(true)
    setNumber(id)
  }
  const falseForm = (event) => {
    event.preventDefault()
    setClick(false)
  }
  const changeHandler = (event, input) => {
    event.preventDefault()
    input.current = event.target.value
  }

  const onChangeCheckBox = (event, index) => {
    const diff = !todos[index].isCompleted
    todos[index].isCompleted = diff
  }

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {click && number === todo.id ? (
              <Form method="PUT">
                <input
                  style={{ display: 'none' }}
                  readOnly
                  name="id"
                  value={todo.id}
                />
                <input
                  style={{ display: 'none' }}
                  readOnly
                  name="isCompleted"
                  defaultValue={todo.isCompleted}
                />
                <input
                  data-testid="modyfy-input"
                  name="todo"
                  defaultValue={todo.todo}
                  onChange={(event) => changeHandler(event, input)}
                />
                <button data-testid="submit-button" type="submit">
                  제출
                </button>

                <button
                  data-testid="cancel-button"
                  type="button"
                  onClick={falseForm}
                >
                  취소
                </button>
              </Form>
            ) : (
              <>
                <label>
                  <input
                    id={todo.id}
                    type="checkbox"
                    defaultChecked={todo.isCompleted}
                    onChange={(event) => onChangeCheckBox(event, index)}
                  />
                  <span>{todo.todo}</span>
                </label>
                <button
                  data-testid="modify-button"
                  type="button"
                  onClick={(event) => modifyForm(event, todo.id)}
                >
                  수정
                </button>
                <Form method="DELETE">
                  <input
                    style={{ display: 'none' }}
                    readOnly
                    name="id"
                    value={todo.id}
                  />
                  <button data-testid="delete-button">삭제</button>
                </Form>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
