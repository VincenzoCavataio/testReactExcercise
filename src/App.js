import { Provider } from "react-redux";
import { Counter } from "./components/Counter";
import { TODO } from "./components/Todo";
import { store } from "./redux/store";
import { TodoList } from "./components/TodoListRedux";

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <TODO />
      <TodoList />
    </Provider>
  );
}

export default App;
