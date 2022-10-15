import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteList({ notes, locale }) {
  return (
    <div className='note-list'>
      {notes.length <= 0 ? (
        <p className='empty'>{locale}</p>
      ) : (
        notes.map((note) => <NoteItem key={note.id} {...note} />)
      )}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

export default NoteList;
