import React from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/local-data';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      search: '',
    };

    this.handleSearchEvent = this.handleSearchEvent.bind(this);
  }

  handleSearchEvent(search) {
    this.setState(() => {
      return {
        notes: getActiveNotes().filter((note) =>
          note.title.toLowerCase().includes(search.toLowerCase())
        ),
        search,
      };
    });
  }

  render() {
    return (
      <div className='page'>
        <div className='page__top'>
          <div className='page__top__add'>
            <h2 className='page__top__title'>My Notes</h2>
            <Link to='/create' className='plus-icon'>
              <FiPlus />
            </Link>
          </div>

          <SearchBar
            search={this.state.search}
            handleSearchEvent={this.handleSearchEvent}
          />
        </div>

        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default HomePage;
