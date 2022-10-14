import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import { showFormattedDate } from '../utils';
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from '../utils/network-data';
import { FiTrash2, FiArchive } from 'react-icons/fi';
import NotFoundPage from './NotFoundPage';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState();

  useEffect(() => {
    const getNoteById = async () => {
      const note = await getNote(id);
      setNote(note);
    };

    getNoteById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!note) return <Loading />;
  if (note.error) return <NotFoundPage />;

  return (
    <div className='detail'>
      <h2 className='detail__title'>{note.data.title}</h2>
      <p className='detail__date'>{showFormattedDate(note.data.createdAt)}</p>
      <p className='detail__body'>{parse(note.data.body)}</p>

      <div className='button-wrapper'>
        {note.data.archived ? (
          <Button
            id={id}
            text='Unarchive'
            type={unarchiveNote}
            icon={<FiArchive />}
          />
        ) : (
          <Button
            id={id}
            text='Archive'
            type={archiveNote}
            icon={<FiArchive />}
          />
        )}
        <Button id={id} text='Delete' type={deleteNote} icon={<FiTrash2 />} />
      </div>
    </div>
  );
}

export default DetailPage;
