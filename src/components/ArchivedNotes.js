import NoteItem from './NoteItem';

function ArchivedNote({ notes, onDelete, onUnarchive }) {
  return (
    <>
      <h2>Archived</h2>
      {notes.length <= 0 ? (
        <p>Empty notes</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            {...note}
            onDelete={onDelete}
            onUnarchive={onUnarchive}
          />
        ))
      )}
    </>
  );
}

export default ArchivedNote;
