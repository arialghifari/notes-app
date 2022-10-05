const showFormattedDate = (date) => {
  const options = {
    weekday: 'short',
    year: 'numeric',
    day: 'numeric',
    month: 'short',
  };
  return new Date(date).toLocaleDateString(['en-UK'], options);
};

export { showFormattedDate };
