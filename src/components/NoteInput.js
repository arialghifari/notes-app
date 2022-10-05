import { useNavigate } from 'react-router-dom';
import WordCounter from './WordCounter';

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
          name='body'
          placeholder='Take a note'
          value={body}
          onChange={(e) => bodyChange(e.target.value)}
          rows='5'
        ></textarea>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

export default NoteInput;
