const http = new easyHTTP

//get posts

http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
    if(err){
        console.log(err)
    }else{
        document.body.textContent = response
    }
 
})

//update posts
//crate data
const data = {
    title : 'Custom Post',
    body: 'loremdmdmd mdmdms dsmddsmsfd'
};
//create post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err){
         console.log(err)
    }else{
      document.body.textContent = post
    }
} )

//update post

http.put('https://jsonplaceholder.typicode.com/posts/2', data, function(err, post){
    if(err){
        console.log(err)
    }else{
        document.body.textContent = post
    }
})

//delete post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err){
        console.log(err)
    }else{
        document.body.textContent = response
    }
 
})