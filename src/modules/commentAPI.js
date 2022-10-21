const commentApi = {
  async getComments(id) {
    const idApi = 'DxgcbWZ6MHoTsGdusWNs';
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idApi}/comments?item_id=${id}`;
    const response = await fetch(url);
    const comment = await response.json();
    return comment;
  },
  async addComment(id, username, comment) {
    const idApi = 'DxgcbWZ6MHoTsGdusWNs';
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${idApi}/comments`;
    const result = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
        username,
        comment,
      }),
    });
    const response = await result.text();
    return response;
  },
};

export default commentApi;