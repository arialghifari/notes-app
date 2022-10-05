import { useNavigate } from 'react-router-dom';
import WordCounter from './WordCounter';
import PropTypes from 'prop-types';

function NoteInput({ counter, title, titleChange, body, bodyChange, submit }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    submit(e);
    navigate('/');
  }

  return (
    <div className='note-input'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <WordCounter counter={counter} />
        <input
          type='text'
          name='title'
          placeholder='Title'
          required
          value={title}
          onChange={(e) => titleChange(e.target.value)}
        />
        <textarea
          className='textarea'
          name='body'
          placeholder='Take a note'
          value={body}
          onChange={(e) => bodyChange(e.target.value)}
          rows='5'
        ></textarea>
        <button type='submit'>CREATE</button>
      </form>
    </div>
  );
}

NoteInput.propTypes = {
  counter: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  titleChange: PropTypes.func.isRequired,
  body: PropTypes.string.isRequired,
  bodyChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default NoteInput;
