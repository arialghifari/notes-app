import { showFormattedDate } from '../utils';

function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  return (
    <div className='note-item'>
      <h3>{title}</h3>
      <p>{showFormattedDate(createdAt)}</p>
      <p>{body}</p>
      <button onClick={() => onDelete(id)}>Delete</button>

      {archived ? (
        <button onClick={() => onUnarchive(id)}>Unarchive</button>
      ) : (
        <button onClick={() => onArchive(id)}>Archive</button>
      )}
    </div>
  );
}

export default NoteItem;
