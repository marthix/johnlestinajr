var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function(){
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
  {
    var data = JSON.parse(xmlhttp.responseText);
    var posts = data.items;
    render(posts);
  }
};

xmlhttp.open('GET', 'https://www.googleapis.com/blogger/v3/blogs/5473265205041965715/posts?key=AIzaSyAnfmmyjwSPSGLQmtS2JWSdwb5iPlBQT-0', true);
xmlhttp.send();


function render(array) {

  if (window.location.search === '') {
    // render all posts
    array.forEach(makePosts);
  } else {
    // find the id, and render specific post content
    var id = window.location.search.replace("?id=", "");
    var post = array.find(function (post) {
      return post.id == id;
    });
    console.dir(post);
    makePost(post);
  }

}

function makePosts(post) {

  var grid = document.getElementById('blogGrid')

  var postBox = document.createElement('div');
  postBox.classList.add('post');

  var postLink = document.createElement('a');
  postLink.href = '?id=' + post.id;

  var postTitle = document.createElement('h1')
  postTitle.innerHTML = post.title;

  var postBody = document.createElement('p');
  var content = strip(post.content);

  if (content.length > 150) {
    postBody.innerHTML = content.substring(0, 150) + "...";
  } else {
    postBody.innerHTML = content;
  }

  var postDate = document.createElement('span');
  postDate.innerHTML = convertDate(Date.parse(post.published));

  postLink.appendChild(postTitle);
  postLink.appendChild(postBody);
  postLink.appendChild(postDate);
  postBox.appendChild(postLink);
  grid.appendChild(postBox);

}

function makePost(post) {

  var grid = document.getElementById('blogGrid');

  var backLink = document.createElement('a');
  backLink.href = './blog.html';
  backLink.innerHTML = 'back to all posts';
  backLink.classList.add('back')

  var postBox = document.createElement('div');
  postBox.classList.add('post-detail');

  var postTitle = document.createElement('h1');
  postTitle.innerHTML = post.title;

  var postBody = document.createElement('p');
  postBody.innerHTML = post.content;

  var postDate = document.createElement('span');
  postDate.innerHTML = convertDate(Date.parse(post.published));

  postBox.appendChild(backLink);
  postBox.appendChild(postDate);
  postBox.appendChild(postTitle);
  postBox.appendChild(postBody);
  grid.appendChild(postBox);

}

function strip(html) {
   var tmp = document.implementation.createHTMLDocument("New").body;
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

function convertDate(timestamp) {

  var newDate = new Date(timestamp);
  var year = newDate.getFullYear();
  var month = newDate.getMonth() + 1;
  var day = newDate.getDate();

  var date = month + '/' + day + '/' + year;

  return date;
}
