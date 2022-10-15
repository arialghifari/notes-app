import PropTypes from 'prop-types';

function WordCounter({ counter, locale }) {
  return (
    <p className='word-counter'>
      {counter} {locale}
    </p>
  );
}

WordCounter.propTypes = { counter: PropTypes.number.isRequired };

export default WordCounter;
