import { showFormattedDate } from '../utils';
import ButtonArchive from './ButtonArchive';
import ButtonDelete from './ButtonDelete';
import ButtonUnarchive from './ButtonUnarchive';

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

      <ButtonDelete onDelete={onDelete} id={id} />
      {archived ? (
        <ButtonUnarchive onUnarchive={onUnarchive} id={id} />
      ) : (
        <ButtonArchive onArchive={onArchive} id={id} />
      )}
    </div>
  );
}

export default NoteItem;
