import styled from "styled-components";

interface Props {
  todo: Todo;
  index: number;
  onToggleTodo: ToggleTodo;
  onDeleteTodo: DeleteTodo;
}

// 定義 completed's style
const StyledTodo = styled.span<{ completed: boolean }>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

/* FC(Function Component)
 * React.FC 會依照 Props 定義好的屬性型別帶入參數
 */
const TodoItem: React.FC<Props> = ({
  todo,
  index,
  onToggleTodo,
  onDeleteTodo,
}) => {
  return (
    <div className="form-check border-bottom py-3 m-0 d-flex justify-content-between align-items-center">
      <div>
        <input
          className="ms-1 me-3 form-check-input"
          type="checkbox"
          checked={todo.complete}
          onClick={() => onToggleTodo && onToggleTodo(index)}
        />
        <StyledTodo className="todo" completed={todo.complete}>
          {todo.text}
        </StyledTodo>
      </div>
      <button
        type="button"
        className="btn btn-outline-danger me-3"
        onClick={() => onDeleteTodo && onDeleteTodo(index)}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
