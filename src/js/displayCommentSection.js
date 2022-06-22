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
      <h3>Comments (2)</h3>
    </div>
    <div class="fetch-comments">
      <p>03/11/2021 alex: i'd love to buy it!</p>
      <br />
      <p>03/11/2021 alex: i'd love to buy it!</p>
      <br />
      <p>03/11/2021 alex: i'd love to buy it!</p>
      <br />
    </div>
  </div>
  <div class="add-comment">
    <div class="form-title">
      <h3>Add a comment</h3>
    </div>
    <form id="add-comment-form" action="./">
      <input type="text" placeholder="Your Name" />
      <textarea
        id="textBox"
        name="textBox"
        maxlength="200"
        placeholder="Your insights"
      ></textarea>
      <button type="submit">Comment</button>
    </form>
  </div>
  </section>`;
  const appearModel = document.getElementById('comment-modal');
  const deskModal = document.getElementById('comment-modal');
  const Deskoverlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closebtn');

  closeBtn.addEventListener('click', () => {
    appearModel.style.display = 'none';
    deskModal.classList.remove('active');
    Deskoverlay.classList.remove('active');
  });
};

export default renderData;
