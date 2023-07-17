import TodoItem from './TodoItem.js';
const TodosList = (props) => {
  const { todosProps } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo}/>
      ))}
    </ul>
  );
};
export default TodosList;