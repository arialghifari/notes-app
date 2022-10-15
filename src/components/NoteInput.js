import WordCounter from './WordCounter';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import LocaleContext from '../context/LocaleContext';
import { createPage } from '../utils/content';

function NoteInput({ counter, title, titleChange, body, bodyChange, submit }) {
  const { locale } = useContext(LocaleContext);

  return (
    <div className='note-input'>
      <form onSubmit={submit}>
        <WordCounter counter={counter} locale={createPage[locale].characters} />
        <input
          type='text'
          name='title'
          placeholder={createPage[locale].inputTitle}
          required
          value={title}
          onChange={(e) => titleChange(e.target.value)}
        />
        <textarea
          className='textarea'
          name='body'
          placeholder={createPage[locale].inputBody}
          value={body}
          onChange={bodyChange}
          rows='5'
        ></textarea>
        <button type='submit'>{createPage[locale].button}</button>
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
