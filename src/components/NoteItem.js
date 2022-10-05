import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';

function NoteItem({ id, title, body, createdAt }) {
  return (
    <div className='note-item'>
      <div className='note-wrap'>
        <h3>
          <Link to={`../detail/${id}`} className='link underline'>
            {title}
          </Link>
        </h3>
        <p className='date'>{showFormattedDate(createdAt)}</p>
        <p className='body'>{body}</p>
      </div>
    </div>
  );
}

export default NoteItem;
