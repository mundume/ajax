/**easyhttp v2
 * 
 * 
 * 
 * @Version 1.0.0
 * 
 * @author nzai Kilonzo
 * 
 * @licence MIT freemium forever
 * 
 * **/


// class easyhttp {
//     get(url){
//         fetch(url)
//         .then(res=>res.json())
//         .then(data=>console.log(data))
//         .catch(err=>err)
//     }
//     post(url, data){
//         fetch(url, {
//             method:'POST',
//             headers:{
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//             },
//             body:JSON.stringify(data)

//         })
//         .then(res=>res.json())
//         .then(data=>console.log('sucess', data))
//         .then(err=>console.log(err))

//     }
//     put(url, data){
//         fetch(url, {
//             method: 'PUT',
//             headers:{
//                 'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//             },
//             body:JSON.stringify(data)

//         }).then(res=>res.json())
//         .then(data=>console.log('Sucess', data))
//         .catch(err=>console.log(err))
//     }
//     delete(url){
//         fetch(url, {
//             method: 'DELETE',
//             headers:{
//                 'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//             },
            
//         }).then(console.log('deleted')).catch(err=>console.log(err))

//     }
   
// }