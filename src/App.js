import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Container from "@material-ui/core/Container";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          Redux todolist
          <Container maxWidth="sm">
            <Input />
            <TodoList />
          </Container>
        </header>
      </div>
    </Provider>
  );
}

export default App;
