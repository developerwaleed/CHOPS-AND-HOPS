
const sendLikes = async () => {
    let likes;
    let itemId;
    try {
        const responsed = await fetch(
            'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WyIYgphl1NOYp2yAcm3L/likes',
            );
        likes = await response.json();
        itemId = data.result;
        console.log(responsed);
      } catch (e) {
        console.log(`Error: ${e}`);
      }
      
}

export default sendLikes;