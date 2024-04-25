const posts = document.getElementById('posts');
const postTable = document.getElementById('postTable')
const endPoint = 'https://jsonplaceholder.typicode.com/posts';
let dataArr = [];

const getData = () => {
    fetch(endPoint)
        .then((res) => {
            if (!res.ok) throw new Error('Unable to fetch data');
            return res.json();
        })
        .then((data) => {

            console.log(data);
            dataArr = data;
            dataArr.forEach(({ id, userId, title, body }) => {
                postTable.innerHTML += `
                    <tr style='margin-bottom: 50px'>
                        <td><a href='./post/blog.html?id=${id}' class='refs'>${id}</a></td>
                        <td>${userId}</td>
                        <td>${title}</td>
                        <td>${body.length > 100 ? body.slice(0, 100) + '...' : body}</td>
                    </tr>
                `;
            });
        })
        .catch((err) => {
            console.log(err.message);
        })
}

getData();

// const postLinks = document.getElementsByClassName('refs');
// console.log(postLinks);
// Array.from(postLinks).forEach(links => {
//     links.addEventListener('click', (e) => {
//         e.preventDefault();
//         const postId = e.target.textContent;
//         window.location.href = `./post/blog.html`;
//     })
// });