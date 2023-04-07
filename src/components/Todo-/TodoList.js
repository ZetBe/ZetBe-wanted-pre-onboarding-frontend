import { useRef, useState } from 'react'
import { Form } from 'react-router-dom'
import classes from './Todo.module.css'

function TodoList({ todos }) {
  const input = useRef('')
  const [click, setClick] = useState(false)
  const [number, setNumber] = useState()

  //todo리스트에서 수정 버튼을 누를 때 나오는 함수
  //아이디와 클릭여부를 통해 해당 인덱스에서만
  //수정가능한 폼이 나오도록 설정했다.
  const modifyForm = (event, id) => {
    event.preventDefault()
    setClick(true)
    setNumber(id)
  }

  //수정 가능한 폼이 나왔을 때, 취소버튼을 누르면 나오는 함수
  //click부분에 false를 설정해서 취소시키게끔 한다.
  const falseForm = (event) => {
    event.preventDefault()
    setClick(false)
  }

  //수정하는 폼에 글자를 입력할 때마다 useRef를 쓰는 input상수에
  //현재 값을 준다.
  const changeHandler = (event, input) => {
    event.preventDefault()
    input.current = event.target.value
  }

  //체크박스를 누를 때 마다 해당 todos의 index를 주고
  //해당 index의 isCompleted변수를 boolean의 반대로 바꿔준다.
  const onChangeCheckBox = (event, index) => {
    const diff = !todos[index].isCompleted
    todos[index].isCompleted = diff
  }

  return (
    <>
      {/*ul태그에만 className속성을 주고 나머지 태그들에게는 
    css파일에서 태그로 걸어서 일괄 적용했다. */}
      <ul className={classes.ul}>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {/*클릭을 했고 클릭을 한 아이디가 맞으면 수정할 수 있는 Form이 나온다. */}
            {click && number === todo.id ? (
              <Form method="PUT">
                {/*Form 컴포넌트에서 action함수에 가져가야 하는 값들이 있는데, 
                화면에 보여지면 안될 경우, style={{ display: 'none' }}을 통해
                화면에 안보이게 했다.
                 */}
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
                {/*위의 조건문의 false일 경우, 일반적인 todo리스트를 볼 수 있게끔 했다. */}
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
