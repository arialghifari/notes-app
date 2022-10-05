import PropTypes from 'prop-types';

function WordCounter({ counter }) {
  return <p className='word-counter'>{counter} characters left</p>;
}

WordCounter.propTypes = { counter: PropTypes.number.isRequired };

export default WordCounter;
