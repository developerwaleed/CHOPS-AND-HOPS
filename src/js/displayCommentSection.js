import postComment from './postComments.js';

const renderData = (element) => {
  const container = document.getElementById('comment-modal');
  container.innerHTML = `<button type="button" class="close-btn" id="closebtn">&times;</button>
  <div class="product-info">
    <div class="product-image">
      <img src="${element.meals[0].strMealThumb}" alt="" width="300" />
    </div>
    <div class="title"><h2>${element.meals[0].strMeal}</h2></div>
    <div class="product-desc">
      <span>Category: ${element.meals[0].strCategory}</span>
      <span>Area: ${element.meals[0].strArea}</span>
      <span>Tags: ${element.meals[0].strTags}</span>
      <span>Link to Recipe : <a href="${element.meals[0].strYoutube}">YouTube</a></span>
    </div>
  </div>
  <div class="comments">
    <div class="comment-title">
      <h3>Comments (<span id="comment-count">0</span>)</h3>
    </div>
    <div class="fetch-comments">
      
    </div>
  </div>
  <div class="add-comment">
    <div class="form-title">
      <h3>Add a comment</h3>
    </div>
    <form id="add-comment-form" action="./">
      <input type="text" placeholder="Your Name" id="username"/>
      <textarea
        id="comment"
        name="textBox"
        maxlength="200"
        placeholder="Your insights"
      ></textarea>
      <div id="message-div">
    </div>
      <button type="submit" class="${element.meals[0].idMeal}" id="submitBtn">Comment</button>
    </form>
    
  </div>
  </section>`;
  const appearModel = document.getElementById('comment-modal');
  const deskModal = document.getElementById('comment-modal');
  const Deskoverlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closebtn');
  const submitBtn = document.getElementById('submitBtn');
  const username = document.getElementById('username');
  const comment = document.getElementById('comment');
  const commentForm = document.getElementById('add-comment-form');
  const statusMessage = document.getElementById('message-div');

  closeBtn.addEventListener('click', () => {
    appearModel.style.display = 'none';
    deskModal.classList.remove('active');
    Deskoverlay.classList.remove('active');
  });

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    postComment(submitBtn.classList[0], username.value, comment.value);
    commentForm.reset();
    statusMessage.innerHTML = 'You comment has been posted! <br>Please refresh the page to see changes';
  });
};

export default renderData;
