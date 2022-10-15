import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { getAccessToken, putAccessToken } from '../utils/network-data';
import ThemeButton from './ThemeButton';
import LocaleContext from '../context/LocaleContext';
import LocaleButton from './LocaleButton';
import { navigation } from '../utils/content';

function Navigation() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const userToken = getAccessToken();
  const { locale } = useContext(LocaleContext);

  const onLogout = async () => {
    putAccessToken('');
    setShow(false);
    navigate('/login');
  };

  return (
    <div className='navigation'>
      <h1 className='navigation__brand'>
        <Link to={userToken ? '/' : '/login'}>{navigation[locale].title}</Link>
      </h1>

      {userToken ? (
        <div className='navigation__nav'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'link-active link' : 'link'
            }
            end
          >
            {navigation[locale].navNotes}
          </NavLink>
          <NavLink
            to='/archived'
            className={({ isActive }) =>
              isActive ? 'link-active link' : 'link'
            }
            end
          >
            {navigation[locale].navArchived}
          </NavLink>
          <LocaleButton />
          <ThemeButton />
          <div className='profile'>
            <button
              className='image'
              onClick={() => setShow((prevShow) => !prevShow)}
            >
              <img src='/image/avatar.png' alt='avatar' />
            </button>

            <button className={show ? `logout` : 'hide'} onClick={onLogout}>
              {navigation[locale].logout}
            </button>
          </div>
        </div>
      ) : (
        <div className='navigation__nav'>
          <LocaleButton />
          <ThemeButton />
        </div>
      )}
    </div>
  );
}

export default Navigation;
