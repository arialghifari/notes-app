function SearchBar({ search, handleSearchEvent }) {
  return (
    <div className='search-bar'>
      <input
        type='text'
        name='search'
        placeholder='Search note'
        value={search}
        onChange={(e) => handleSearchEvent(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
