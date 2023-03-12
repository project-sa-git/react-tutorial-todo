import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

function App() {

  // useState: 第一引数(todos)のオブジェクトを監視する(タスク追加等で変わった場合だけ再レンダリングする)。初期値(Todo1Todo2)を渡してる。
  const [todos, setTodos] = useState([
    {id: 1, name: "Todo1", completed: false},
  ]);

  // userRef(); 取得したい要素（テキストボックスの入力文字）を紐付け保持して使える（ex. console.log(todoNameRef.current.value);）
  const todoNameRef = useRef();

  // タスクを追加する
  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      // スプレッド構文(...)で前の(prev)todosのあとに（,）、追加する
      console.log(prevTodos);
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
    });
    todoNameRef.current.value = null;

  }

  return (
    <>
    {/* TodoList: todosをまとめたコンポーネント */}
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスク追加</button>
      <button>タスク削除</button>
      <div>残りのタスク: 0</div>
    </>
  );
}

export default App;
