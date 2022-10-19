const url = 'https://api.tvmaze.com/search/shows?q=';

const getShows = async (letter) => {
  const result = await fetch(`${url}${letter}`).then((response) => response.json());
  return result;
};

export default getShows;