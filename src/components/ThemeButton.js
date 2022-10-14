import { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import ThemeContext from '../context/ThemeContext';

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className='setting' onClick={toggleTheme}>
      {theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </button>
  );
}

export default ThemeButton;
