import displayLikes from './displayLikes.js';

const sendLikes = async () => {
  let likes;
  try {
    const responsed = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WyIYgphl1NOYp2yAcm3L/likes',
    );
    likes = await responsed.json();

    displayLikes(likes);

  } catch (e) {
    console.log(`Error: ${e}`);
  }
  return likes;
};

export default sendLikes;