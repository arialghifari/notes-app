import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import { showFormattedDate } from '../utils';
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from '../utils/local-data';
import { FiTrash2, FiArchive } from 'react-icons/fi';
import NotFoundPage from './NotFoundPage';
import parse from 'html-react-parser';

function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);

  if (!note) return <NotFoundPage />;

  return (
    <div className='detail'>
      <h2 className='detail__title'>{note.title}</h2>
      <p className='detail__date'>{showFormattedDate(note.createdAt)}</p>
      <p className='detail__body'>{parse(note.body)}</p>

      <div className='button-wrapper'>
        {note.archived ? (
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
