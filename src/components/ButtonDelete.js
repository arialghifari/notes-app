function ButtonDelete({ onDelete, id }) {
  return <button onClick={() => onDelete(id)}>Delete</button>;
}

export default ButtonDelete;
