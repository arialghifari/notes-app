import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navigation'>
      <h1 className='navigation__brand'>
        <Link to='/'>NOTES APP</Link>
      </h1>

      <div className='navigation__nav'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'link-active link' : 'link')}
          end
        >
          My Notes
        </NavLink>
        <NavLink
          to='/archived'
          className={({ isActive }) => (isActive ? 'link-active link' : 'link')}
          end
        >
          Archived
        </NavLink>
        <Link to='/profile'>
          <img src='/image/avatar.jpg' alt='avatar' />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
