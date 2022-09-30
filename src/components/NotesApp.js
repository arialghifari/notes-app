import { Component } from 'react';
import { getInitialData } from '../utils';
import NoteList from './NoteList';

export class NotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
  }

  render() {
    return (
      <>
        <NoteList notes={this.state.notes} />
      </>
    );
  }
}

export default NotesApp;
