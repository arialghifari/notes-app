import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { useContext } from 'react';
import LocaleContext from '../context/LocaleContext';

function NoteItem({ id, title, body, createdAt }) {
  const { locale } = useContext(LocaleContext);

  return (
    <div className='note-item'>
      <div className='note-wrap'>
        <h3>
          <Link to={`../detail/${id}`} className='link underline'>
            {title}
          </Link>
        </h3>
        <p className='date'>{showFormattedDate(createdAt, locale)}</p>
        <p className='body'>{parse(body)}</p>
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
