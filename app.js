
document.getElementById('button').addEventListener('click', loadData) 
const container = document.getElementById('container')

function loadData(){

  //CREATE XHR OBJECT
  const xhr = new XMLHttpRequest()

  //OPEN

  xhr.open('Get', 'data.txt', true )
  xhr.onload = function(){
    if(this.status===200){
     document.getElementById('output').innerHTML =  `<p>${this.responseText}</p>`
   
    
    }
  }
  xhr.send()
}