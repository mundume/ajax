class awaitEassy {
    async get(url){
    const response = await fetch(url)
    const res = await response.json()
    return res
    }
    async post(url, data){
        const response = await fetch(url,{
            method:'POST',
            headers:{
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
            
        })
        const res = await response.json()
        console.log(res)
       
    }

    async put (url, data){
        const response = await fetch(url,{
            method:'PUT',
            headers:{
            'Content-Type': 'application/json'
            },
            data:JSON.stringify(data)
            
        } )
        const res = await response.json()
        return res


    }

    async delete(url){
        const response = await fetch(url, {
            method:'PUT',
            headers:{
            'Content-Type': 'application/json'
            },
        })
        const res = await response.json()
        return res
    }
    
}


