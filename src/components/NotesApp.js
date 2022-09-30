import { Component } from 'react';
import { getInitialData } from '../utils';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

export class NotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
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
            createdAt: '2022-09-14T04:27:34.572Z',
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <NoteInput addNote={this.onAddNote} />

        <NoteList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onUnarchive={this.onUnarchiveHandler}
        />
      </>
    );
  }
}

export default NotesApp;