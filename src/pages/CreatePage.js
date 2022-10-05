import { Component } from 'react';
import NoteInput from '../components/NoteInput';

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
      <div className='page'>
        <div className='page__top'>
          <h2 className='page__top__title'>Create Note</h2>

          <NoteInput />
        </div>
      </div>
    );
  }
}

export default CreatePage;
