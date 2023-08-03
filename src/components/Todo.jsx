/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Todo = ({ todo, removeTodo, completeTodos }) => {
  return (
    <div key={todo.id}>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        key={todo.id}
      >
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">({todo.category})</p>
        </div>
        <div>
          <button className="complete" onClick={() => completeTodos(todo.id)}>
            Complete
          </button>
          <button className="remove" onClick={() => removeTodo(todo.id)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
