import SearchBar from './SearchBar';

function Header({ search, onSearch }) {
  return (
    <header>
      <div className='header-wrap'>
        <h1>
          <a href='/' className='logo'>
            Notes
          </a>
        </h1>
        <SearchBar search={search} onSearch={onSearch} />
        <a
          href='https://github.com/arialghifari'
          target='_blank'
          rel='noreferrer'
        >
          <img src='image/avatar.jpg' alt='Avatar' />
        </a>
      </div>
    </header>
  );
}

export default Header;
