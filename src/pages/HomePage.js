import { useEffect, useState } from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/network-data';
import { FiPlus } from 'react-icons/fi';
import { Link, useSearchParams } from 'react-router-dom';
import Loading from '../components/Loading';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const activeNotes = async () => {
      const notes = await getActiveNotes();
      setNotes(notes.data);
      setLoading(false);
    };

    activeNotes();
  }, []);

  const onSearch = (keyword) => {
    setSearchParams({ keyword });
  };

  const activeNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword)
  );

  return (
    <div className='page'>
      <div className='page__top'>
        <div className='page__top__add'>
          <h2 className='page__top__title'>My Notes</h2>
          <Link to='/create' className='plus-icon' title='Create Note'>
            <FiPlus />
          </Link>
        </div>

        <SearchBar onSearch={onSearch} keyword={keyword} />
      </div>

      {loading ? <Loading /> : <NoteList notes={activeNotes} />}
    </div>
  );
}

export default HomePage;
