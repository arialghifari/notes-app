import { Component } from 'react';

export class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      counter: 50,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitNote = this.onSubmitNote.bind(this);
  }

  onTitleChange(e) {
    if (e.target.value.length > 50) return;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
        counter: 50 - e.target.value.length,
      };
    });
  }

  onBodyChange(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: e.target.value,
      };
    });
  }

  onSubmitNote(e) {
    e.preventDefault();
    this.props.addNote({ title: this.state.title, body: this.state.body });
    this.setState({ title: '', body: '', counter: 50 });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitNote}>
          <p>{this.state.counter} character left</p>

          <input
            type='text'
            name='title'
            placeholder='Title'
            required
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <textarea
            name='body'
            placeholder='Take a note...'
            value={this.state.body}
            onChange={this.onBodyChange}
          ></textarea>
          <button type='submit'>Create Note</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
