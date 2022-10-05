import { Component } from 'react';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/local-data';

export class CreatePage extends Component {
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

  onTitleChange(title) {
    if (title.length > 50) return;

    this.setState((prevState) => {
      return {
        ...prevState,
        title,
        counter: 50 - title.length,
      };
    });
  }

  onBodyChange(body) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body,
      };
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    addNote({ title: this.state.title, body: this.state.body });
  }

  render() {
    return (
      <div className='page'>
        <div className='page__top'>
          <h2 className='page__top__title'>Create Note</h2>

          <NoteInput
            counter={this.state.counter}
            title={this.state.title}
            titleChange={this.onTitleChange}
            body={this.state.body}
            bodyChange={this.onBodyChange}
            submit={this.onSubmitHandler}
          />
        </div>
      </div>
    );
  }
}

export default CreatePage;
