import React from 'react'
import Todo from './Todo'

// rafce 関数コンポーネントを自動作成する

// TodoListコンポーネント
const TodoList = ({todos}) => {
  return todos.map((todo => <Todo todo={todo} key={todo} />))
}

export default TodoList
