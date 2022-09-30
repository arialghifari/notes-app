import ActiveNotes from './ActiveNotes';
import ArchivedNotes from './ArchivedNotes';

function NoteList({ notes, onDelete, onArchive, onUnarchive, search }) {
  const filterActiveNotes = notes.filter(
    (note) => !note.archived && note.title.toLowerCase().includes(search)
  );
  const filterArchivedNotes = notes.filter(
    (note) => note.archived && note.title.toLowerCase().includes(search)
  );

  return (
    <div className='note-list'>
      <ActiveNotes
        notes={filterActiveNotes}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <ArchivedNotes
        notes={filterArchivedNotes}
        onDelete={onDelete}
        onUnarchive={onUnarchive}
      />
    </div>
  );
}

export default NoteList;
