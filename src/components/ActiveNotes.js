import NoteItem from './NoteItem';

function ActiveNote({ notes, onDelete, onArchive }) {
  return (
    <>
      <h2>My Note</h2>
      {notes.length <= 0 ? (
        <p>Kosong</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            {...note}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))
      )}
    </>
  );
}

export default ActiveNote;
