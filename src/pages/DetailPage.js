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

function DetailPage() {
  const { id } = useParams();
  const { title, body, createdAt, archived } = getNote(id);

  return (
    <div className='detail'>
      <h2 className='detail__title'>{title}</h2>
      <p className='detail__date'>{showFormattedDate(createdAt)}</p>
      <p className='detail__body'>{body}</p>

      <div className='button-wrapper'>
        {archived ? (
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
