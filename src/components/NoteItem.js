import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';

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

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
