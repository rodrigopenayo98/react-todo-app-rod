import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todosProps, handleChange, delTodo }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

export default TodosList;