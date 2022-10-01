function SearchBar({ search, onSearch }) {
  return (
    <div className='search-bar'>
      <input
        type='text'
        name='search'
        placeholder='Search note'
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
