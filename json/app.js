document.getElementById('button1').addEventListener('click', loadCustomer)

function loadCustomer(e){
  const xhr = new XMLHttpRequest()


  xhr.open('get','customers.json', true)

  xhr.onload = function(){
    if(this.status===200){
      console.log(this.responseText)

      const customers = JSON.parse(this.responseText)
      let outputs
      customers.map(output=>{
         outputs += `
      <ul>
      <li>ID:${output.id}</li>
      <li>Name:${output.name}</li>
      <li>Company:${output.company}</li>
      <li>Phone:${output.phone}</li>
      </ul>
      `;
      document.getElementById('customers').innerHTML = outputs
      })
      
     
    }
  }

  xhr.send()
}