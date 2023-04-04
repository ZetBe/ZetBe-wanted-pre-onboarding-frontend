function TodoList({ todos }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" defaultChecked={todo.isCompleted} />
              <span>{todo.todo}</span>
              <button>수정</button>
              <button>삭제</button>
            </label>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
