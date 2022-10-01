import { Component } from 'react';
import WordCounter from './WordCounter';

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
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
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

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addNote({ title: this.state.title, body: this.state.body });
    this.setState(() => {
      return { title: '', body: '', counter: 50 };
    });
  }

  render() {
    return (
      <div className='note-input'>
        <h2>Add Note</h2>

        <form onSubmit={this.onSubmitHandler}>
          <WordCounter counter={this.state.counter} />
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
            placeholder='Take a note'
            value={this.state.body}
            onChange={this.onBodyChange}
            rows='5'
          ></textarea>
          <button type='submit'>Create</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
