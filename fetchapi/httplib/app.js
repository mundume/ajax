
const http = new easyhttp

http.get('https://jsonplaceholder.typicode.com/todos/')

const data = {
    userId: 546,
    id:201,
    title:"lorem da sit ameu"

}

http.post('https://jsonplaceholder.typicode.com/todos/4', data)


http.put('https://jsonplaceholder.typicode.com/todos/1', data)

http.delete('https://jsonplaceholder.typicode.com/todos/201')