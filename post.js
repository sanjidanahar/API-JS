function loadPosts(){
    // console.log('loading posts data')

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    // console.log(posts);

    const  postContainer = document.getElementById('posts-container');

    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        console.log(post);

        postDiv.innerHTML = ` 
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.description}</p>
        `;

        postContainer.appendChild(postDiv);
        // console.log(post);
    }
}

loadPosts();

