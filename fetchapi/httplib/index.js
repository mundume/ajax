const http = new awaitEassy
//get data async await
// http.get('https://jsonplaceholder.typicode.com/todos/')
// .then(data=>console.log(data))
// .catch(err=>err)

//post data
const data = {
    userId: 5453,
    id:201,
    title:"lorem da sit ameu"

}

// http.post('https://jsonplaceholder.typicode.com/todos/10', data)
// .then(data=>console.log('SUCESS', data))
// .catch(err=>err)

http.put('https://jsonplaceholder.typicode.com/todos/1', data)
.then(data=>console.log(data))
.catch(err=>console.log(err))

http.delete('https://jsonplaceholder.typicode.com/todos/1')
.then(data=>console.log('Sucess', data))
.catch(err=>console.log(err))