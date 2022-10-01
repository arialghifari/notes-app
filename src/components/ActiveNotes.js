import NoteItem from './NoteItem';

function ActiveNote({ notes, onDelete, onArchive }) {
  return (
    <div>
      <h2>My Note</h2>
      {notes.length <= 0 ? (
        <p className='empty'>Empty notes</p>
      ) : (
        <div className='grid'>
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              {...note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ActiveNote;
