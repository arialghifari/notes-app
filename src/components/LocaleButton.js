import { useContext } from 'react';
import { MdOutlineGTranslate } from 'react-icons/md';
import LocaleContext from '../context/LocaleContext';

function LocaleButton() {
  const { toggleLocale } = useContext(LocaleContext);

  return (
    <button className='setting' onClick={toggleLocale}>
      <MdOutlineGTranslate />
    </button>
  );
}

export default LocaleButton;
