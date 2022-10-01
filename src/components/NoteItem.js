import { showFormattedDate } from '../utils';
import Button from './Button';

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
      <div className='note-wrap'>
        <h3>{title}</h3>
        <p className='date'>{showFormattedDate(createdAt)}</p>
        <p className='body'>{body}</p>
      </div>

      <div className='button-wrap'>
        <Button id={id} type={onDelete} text='Delete' />
        {archived ? (
          <Button id={id} type={onUnarchive} text='Unarchive' />
        ) : (
          <Button id={id} type={onArchive} text='Archive' />
        )}
      </div>
    </div>
  );
}

export default NoteItem;
