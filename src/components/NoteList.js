import NoteItem from './NoteItem';

function NoteList({ notes }) {
  return (
    <div className='note-list'>
      {notes.length <= 0 ? (
        <p className='empty'>Empty notes</p>
      ) : (
        notes.map((note) => <NoteItem key={note.id} {...note} />)
      )}
    </div>
  );
}

export default NoteList;
