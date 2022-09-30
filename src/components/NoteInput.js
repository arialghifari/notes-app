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
  }

  onTitleChange(event) {
    if (event.target.value.length > 50) return;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
        counter: 50 - event.target.value.length,
      };
    });
  }

  onBodyChange(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  render() {
    return (
      <div>
        <form>
          <p>{this.state.counter} character left</p>

          <input
            type='text'
            name='title'
            placeholder='Title'
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <textarea
            name='body'
            placeholder='Take a note...'
            value={this.state.body}
            onChange={this.onBodyChange}
          ></textarea>
          <button>Create Note</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
