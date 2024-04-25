const postTitle = document.getElementById('postTitle');
const postBody = document.getElementById('postBody');
const urlParam = new URLSearchParams(window.location.search);
const identity = urlParam.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${identity}`)
    .then(res => {
        if (!res.ok) throw new Error('Failed to load data');
        return res.json();
    })
    .then(data => {
        console.log(data)
        const {title,body} = data;
        postTitle.textContent = title;
        postBody.textContent = body;
    })
    .catch(err => console.warn(err.message));