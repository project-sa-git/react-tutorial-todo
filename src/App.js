import { useState } from "react";
import TodoList from "./TodoList";
function App() {

  // useState: 第一引数(todos)のオブジェクトを監視する(タスク追加等で変わった場合だけ再レンダリングする)。初期値(Todo1Todo2)を渡してる。
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);

  return (
    <>
    {/* TodoList: todosをまとめたコンポーネント */}
      <TodoList todos={todos} />
      <input type="text" />
      <button>タスク追加</button>
      <button>タスク削除</button>
      <div>残りのタスク: 0</div>
    </>
  );
}

export default App;
