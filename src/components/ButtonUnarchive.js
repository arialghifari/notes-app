function ButtonUnarchive({ onUnarchive, id }) {
  return <button onClick={() => onUnarchive(id)}>Unarchive</button>;
}

export default ButtonUnarchive;
