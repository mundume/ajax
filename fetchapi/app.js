document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJson)
document.getElementById('button3').addEventListener('click', getExternal)

function getText(){
  fetch('test.txt')
  .then(res=>res.text())
  .then(data=>{
  
  document.getElementById('output').innerHTML = `<p>${data}</p>`
  })
  .catch(err=>console.log(err))
}
function getJson(){
  fetch('posts.json')
  .then((res=>res.json()))
  
  .then(data=>{
   console.log(data)
   let output = ''
   data.map(post=>output+=`<li>${post.title}</li>`)
   document.getElementById('output').innerHTML = output
  })

  .catch(err=>console.log(err))
}
//get from an external api
function getExternal(){
  
    fetch('https://api.github.com/users')
    .then((res)=>{
     return res.json()
    })
    .then((data)=>{
     console.log(data)
     let output = ''
     data.forEach(user=>output+=`<li>${user.login}</li>`)
     document.getElementById('output').innerHTML = output
    })
  
    .catch(err=>console.log(err))
  
}