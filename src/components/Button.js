import { useNavigate } from 'react-router-dom';

function Button({ id, type, text, icon }) {
  const navigate = useNavigate();

  function handleClick() {
    type(id);
    navigate('/');
  }

  return (
    <button className={text} onClick={() => handleClick()}>
      {text.toUpperCase()} {icon}
    </button>
  );
}

export default Button;
