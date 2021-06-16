import React from 'react';

function Todo(props) {
  return (
    <div className={`todo ${props.todo.favorite ? 'selected': ''}`}>
      <div className="favorite">
        <input type="checkbox" className="check"/>
      </div>
      <div className="todo-text">
        {props.todo.text}
      </div>
      <div className="actions">
        <button onClick={() => props.deleteTodo(props.index)} className="del">
          x
        </button>
      </div>
    </div>
  );
}

export default Todo;