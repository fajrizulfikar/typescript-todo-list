import React from 'react';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label>
        <input 
          type="checkbox" 
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo)
          }}
        />{' '}
        {todo.text}
      </label>
    </li>
  )
};
