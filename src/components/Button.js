import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({ id, type, text, icon }) {
  const navigate = useNavigate();

  const handleClick = async () => {
    await type(id);
    navigate('/');
  };

  return (
    <button className={text} onClick={handleClick}>
      {text.toUpperCase()} {icon}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Button;
