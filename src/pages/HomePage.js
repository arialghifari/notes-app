import { Component } from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/local-data';
import { FiPlus } from 'react-icons/fi';
import { Link, useSearchParams } from 'react-router-dom';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <HomePage changeSearchParams={changeSearchParams} keyword={title} />;
}

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(props.keyword || ''),
      search: props.keyword || '',
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState(() => {
      return {
        notes: getActiveNotes(keyword),
        search: keyword,
      };
    });

    this.props.changeSearchParams(keyword);
  }

  render() {
    return (
      <div className='page'>
        <div className='page__top'>
          <div className='page__top__add'>
            <h2 className='page__top__title'>My Notes</h2>
            <Link to='/create' className='plus-icon' title='Create Note'>
              <FiPlus />
            </Link>
          </div>

          <SearchBar search={this.onSearch} keyword={this.state.search} />
        </div>

        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default HomePageWrapper;
