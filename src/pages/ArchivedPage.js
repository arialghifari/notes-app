import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loading from '../components/Loading';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import LocaleContext from '../context/LocaleContext';
import { homeArchivePage } from '../utils/content';
import { getArchivedNotes } from '../utils/network-data';

function ArchivedPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    const activeNotes = async () => {
      const notes = await getArchivedNotes();
      setNotes(notes.data);
      setLoading(false);
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
        <h2 className='page__top__title'>
          {homeArchivePage[locale].archivedTitle}
        </h2>
        <SearchBar
          onSearch={onSearch}
          keyword={keyword}
          locale={homeArchivePage[locale].search}
        />
      </div>

      {loading ? (
        <Loading />
      ) : (
        <NoteList
          notes={archivedNotes}
          locale={homeArchivePage[locale].noteList}
        />
      )}
    </div>
  );
}

export default ArchivedPage;
