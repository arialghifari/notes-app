import NoteItem from './NoteItem';

function ArchivedNote({ notes, onDelete, onUnarchive }) {
  return (
    <div>
      <h2>Archived</h2>
      {notes.length <= 0 ? (
        <p className='empty'>Empty notes</p>
      ) : (
        <div className='grid'>
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              {...note}
              onDelete={onDelete}
              onUnarchive={onUnarchive}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ArchivedNote;
