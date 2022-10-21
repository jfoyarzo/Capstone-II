const itemCounter = (itemClass) => {
  const items = document.querySelectorAll(`.${itemClass}`);
  let counter = 0;
  items.forEach(() => {
    counter += 1;
  });
  return counter;
};

export default itemCounter;