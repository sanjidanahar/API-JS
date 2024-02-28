const loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json)
    .then(data => console.log(data))

    .catch(error => console.error('error happened',error))
}