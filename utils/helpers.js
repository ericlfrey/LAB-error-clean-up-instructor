const renderToDOM = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};

const createId = (array) => {
  if (array.length) {
    const idArray = array.map((el) => el.id);
    return Math.max(...idArray) + 1;
  }
  return 0;
};

export { renderToDOM, createId };
