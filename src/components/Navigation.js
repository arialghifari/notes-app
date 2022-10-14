import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { getAccessToken, putAccessToken } from '../utils/network-data';

function Navigation() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const userToken = getAccessToken();

  const onLogout = () => {
    putAccessToken('');
    setShow(false);
    navigate('/login');
  };

  return (
    <div className='navigation'>
      <h1 className='navigation__brand'>
        <Link to='/'>NOTES APP</Link>
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
            My Notes
          </NavLink>
          <NavLink
            to='/archived'
            className={({ isActive }) =>
              isActive ? 'link-active link' : 'link'
            }
            end
          >
            Archived
          </NavLink>
          <div className='profile'>
            <button
              className='image'
              onClick={() => setShow((prevShow) => !prevShow)}
            >
              <img src='/image/avatar.jpg' alt='avatar' />
            </button>

            <button className={show ? `logout` : 'hide'} onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className='navigation__nav'>
          <button>ID</button>
          <button>Dark</button>
        </div>
      )}
    </div>
  );
}

export default Navigation;
