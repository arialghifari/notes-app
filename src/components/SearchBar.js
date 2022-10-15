import PropTypes from 'prop-types';

function SearchBar({ onSearch, keyword, locale }) {
  return (
    <div className='search-bar'>
      <input
        type='text'
        name='search'
        placeholder={locale}
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  search: PropTypes.func,
  keyword: PropTypes.string,
  locale: PropTypes.string.isRequired,
};

export default SearchBar;
