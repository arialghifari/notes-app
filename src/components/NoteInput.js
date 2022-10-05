import WordCounter from './WordCounter';

function NoteInput() {
  return (
    <div className='note-input'>
      <form onSubmit=''>
        <WordCounter counter='' />
        <input
          type='text'
          name='title'
          placeholder='Title'
          required
          value=''
          onChange=''
        />
        <textarea
          name='body'
          placeholder='Take a note'
          value=''
          onChange=''
          rows='5'
        ></textarea>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

export default NoteInput;
