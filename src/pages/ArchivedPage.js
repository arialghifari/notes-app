import { Component } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/local-data';

function ArchivedPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return (
    <ArchivedPage changeSearchParams={changeSearchParams} keyword={title} />
  );
}

class ArchivedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(props.keyword || ''),
      search: props.keyword || '',
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState(() => {
      return {
        notes: getArchivedNotes(keyword),
        search: keyword,
      };
    });

    this.props.changeSearchParams(keyword);
  }

  render() {
    return (
      <div className='page'>
        <div className='page__top'>
          <h2 className='page__top__title'>Archived Notes</h2>
          <SearchBar search={this.onSearch} keyword={this.state.search} />
        </div>

        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default ArchivedPageWrapper;
