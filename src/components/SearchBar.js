function SearchBar({ search, onSearch }) {
  return (
    <div>
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
