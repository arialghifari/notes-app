import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import useInput from '../hooks/useInput';
import { addNote } from '../utils/network-data';
import LocaleContext from '../context/LocaleContext';
import { createPage } from '../utils/content';

function CreatePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, onBodyChange] = useInput('');
  const [counter, setCounter] = useState(50);
  const { locale } = useContext(LocaleContext);

  const onTitleChange = (title) => {
    if (title.length > 50) return;

    setTitle(title);
    setCounter(50 - title.length);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await addNote({ title, body });
    navigate('/');
  };

  return (
    <div className='page'>
      <div className='page__top'>
        <h2 className='page__top__title'>{createPage[locale].title}</h2>

        <NoteInput
          counter={counter}
          title={title}
          titleChange={onTitleChange}
          body={body}
          bodyChange={onBodyChange}
          submit={onSubmitHandler}
        />
      </div>
    </div>
  );
}

export default CreatePage;
