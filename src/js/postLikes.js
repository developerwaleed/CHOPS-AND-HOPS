const postLikes = async (id) => {
    const resp = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WyIYgphl1NOYp2yAcm3L/likes',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          item_id: id,
        }),
      },
    );
    const data = await resp.json();
    console.log(data);
  
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
  
    return data;
  };
  
  export default postLikes;