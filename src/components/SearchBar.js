function SearchBar({ search, keyword }) {
  return (
    <div className='search-bar'>
      <input
        type='text'
        name='search'
        placeholder='Search note'
        value={keyword}
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
