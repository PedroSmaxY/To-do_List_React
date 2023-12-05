import PropTypes from "prop-types";

export default function Todo({ todo, removeTodo, completeTodos }) {
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
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
  completeTodos: PropTypes.func.isRequired,
};
