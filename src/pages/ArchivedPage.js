import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loading from '../components/Loading';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/network-data';

function ArchivedPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const activeNotes = async () => {
      const notes = await getArchivedNotes();
      setNotes(notes.data);
      setLoading(false)
    };

    activeNotes();
  }, []);

  const onSearch = (keyword) => {
    setSearchParams({ keyword });
  };

  const archivedNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword)
  );

  return (
    <div className='page'>
      <div className='page__top'>
        <h2 className='page__top__title'>Archived Notes</h2>
        <SearchBar onSearch={onSearch} keyword={keyword} />
      </div>

      {loading ? <Loading /> : <NoteList notes={archivedNotes} />}
    </div>
  );
}

export default ArchivedPage;
