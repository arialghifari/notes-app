function Button({ id, type, text }) {
  return (
    <button className={text} onClick={() => type(id)}>
      {text}
    </button>
  );
}

export default Button;
