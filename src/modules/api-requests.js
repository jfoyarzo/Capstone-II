const showsUrl = 'https://api.tvmaze.com/search/shows?q=';
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DxgcbWZ6MHoTsGdusWNs/likes/';

const getShows = async (letter) => {
  const result = await fetch(`${showsUrl}${letter}`).then((response) => response.json());
  return result;
};

const getLikes = async () => {
  const result = await fetch(`${likesUrl}`).then((response) => response.json());
  return result;
};

const postLike = async (id) => {
  const result = await fetch(likesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  return result;
};

export { getShows, getLikes, postLike };