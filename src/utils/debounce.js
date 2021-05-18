export const debounce = (f, time) => {
  let timeout;
  return (...arg) => {
    const later = () => {
      clearTimeout(timeout);
      f(...arg);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, time);
  };
};
