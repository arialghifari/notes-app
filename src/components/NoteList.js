import React from 'react';
import ActiveNotes from './ActiveNotes';
import ArchivedNotes from './ArchivedNotes';

function NoteList({ notes, onDelete, onArchive, onUnarchive }) {
  const filterActiveNotes = notes.filter((note) => !note.archived);
  const filterArchivedNotes = notes.filter((note) => note.archived);

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
