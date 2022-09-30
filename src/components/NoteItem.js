import { showFormattedDate } from '../utils';

function NoteItem({ id, title, body, createdAt, archived }) {
  return (
    <div className='note-item'>
      <h2>{title}</h2>
      <p>{showFormattedDate(createdAt)}</p>
      <p>{body}</p>
    </div>
  );
}

export default NoteItem;
