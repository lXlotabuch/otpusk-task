export const sortData = data => {
  return Object.keys(data)
    .map(key => ({
      id: key,
      ...data[key],
    }))
    .sort((a, b) => {
      const dateA = new Date(a.date.split('-').reverse().join('-'));
      const dateB = new Date(b.date.split('-').reverse().join('-'));
      return dateB - dateA;
    });
};
