import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navigation'>
      <h1 className='navigation__brand'>
        <Link to='/'>Notes App</Link>
      </h1>
      <Link to='/archive' className='link'>
        Archive
      </Link>
    </div>
  );
}

export default Navigation;
