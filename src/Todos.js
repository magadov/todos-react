import React from 'react';
import Todo from './Todo';

function Todos(props) {
  return (
    <div className="todos">
      {props.todos.map((todo, index) => {
        return (

        <Todo
          key = {index}
          todo={todo}
          index = {index}
          deleteTodo = {props.deleteTodo} />
        )
      })
      }
    </div>
  );
}

export default Todos;