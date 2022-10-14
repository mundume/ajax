const http = new easyHTTP

//get posts

http.get('https://jsonplaceholder.typicode.com/todos/', function(err, response){
    if(err){
        console.log(err)
    }else{
        document.body.textContent = response
    }
 
})