function ButtonArchive({ onArchive, id }) {
  return <button onClick={() => onArchive(id)}>Archive</button>;
}

export default ButtonArchive;
