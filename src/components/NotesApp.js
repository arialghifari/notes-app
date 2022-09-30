import { Component } from 'react';
import { getInitialData } from '../utils';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import SearchBar from './SearchBar';

export class NotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    );
    this.setState({ notes });
  }

  onUnarchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );
    this.setState({ notes });
  }

  onAddNote({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearch(title) {
    this.setState((prevState) => {
      return {
        ...prevState,
        search: title,
      };
    });
  }

  render() {
    return (
      <>
        <SearchBar onSearch={this.onSearch} />
        <NoteInput addNote={this.onAddNote} />

        <NoteList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onUnarchive={this.onUnarchiveHandler}
          search={this.state.search}
        />
      </>
    );
  }
}

export default NotesApp;
