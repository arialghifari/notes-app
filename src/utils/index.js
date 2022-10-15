const showFormattedDate = (date, locale) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    day: 'numeric',
    month: 'short',
  };
  return new Date(date).toLocaleDateString(
    [locale === 'id' ? 'id' : 'en-UK'],
    options
  );
};

export { showFormattedDate };
