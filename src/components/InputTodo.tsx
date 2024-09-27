const style = {
  backgroundColor: '#c6e5d9',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
};

export const InputTodo = (props) => {
  return (
    <div style={style}>
      <input
        value={props.todoText}
        placeholder="TODOを入力"
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <button onClick={props.onClickAdd} disabled={props.disabled}>
        追加
      </button>
    </div>
  );
};
