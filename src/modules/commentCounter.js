const countComments = () => {
  const comments = document.querySelector('.commentSection').children;
  const nextCount = comments.length || 1;
  return nextCount;
};

export default countComments;