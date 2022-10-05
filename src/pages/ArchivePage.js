import React from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/local-data';

function ArchivePage() {
  return (
    <div className='page'>
      <div className='page__top'>
        <h2 className='page__top__title'>Archived Notes</h2>
        <SearchBar />
      </div>
      
      <NoteList notes={getArchivedNotes()} />
    </div>
  );
}

export default ArchivePage;
