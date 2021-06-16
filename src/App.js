import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Todos from './Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Купить бананы",
      favorite: false,
    },
    {
      text: "Продать людей",
      favorite: true,
    },
    {
      text: "Выучить JavaS",
      favorite: true,
    },
  ]);

  const [text, setText] = useState("")

  const deleteTodo = (todoIndex) => {
    const filtered =  todos.filter((todo, index) => {
      if(index === todoIndex) {
        return false
      }

      return true
    })
    setTodos(filtered)
  }

const addTodo = () => {
  setTodos([{
    text: text,
    favorite: false
  },
    ...todos
  ]);

  setText("");
}

  return (
    <div className="app">
      <Header />
      <Form text = {text} setText = {setText} addTodo = {addTodo} />
      <Todos todos = {todos} deleteTodo = {deleteTodo} />

    </div>

  );
}

export default App;
