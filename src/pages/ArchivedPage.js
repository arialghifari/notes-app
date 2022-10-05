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

  return <ArchivedPage onSearch={changeSearchParams} keyword={title} />;
}

class ArchivedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      search: '',
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState(() => {
      return {
        notes: getArchivedNotes().filter((note) =>
          note.title.toLowerCase().includes(keyword.toLowerCase())
        ),
        search: keyword,
      };
    });

    this.props.onSearch(keyword);
  }

  componentDidMount() {
    if (!this.props.keyword) {
      this.setState(() => {
        return {
          notes: getArchivedNotes(),
          search: '',
        };
      });
    } else {
      this.onSearch(this.props.keyword);
    }
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
