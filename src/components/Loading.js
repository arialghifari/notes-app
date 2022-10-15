import { useContext } from 'react';
import LocaleContext from '../context/LocaleContext';

function Loading() {
  const { locale } = useContext(LocaleContext);

  return <p className='loading'>{locale === 'en' ? 'Loading' : 'Memuat'}...</p>;
}

export default Loading;
