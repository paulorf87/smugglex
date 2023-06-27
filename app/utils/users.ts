export async function getUsers(){
    try {
      const response = await fetch('http://localhost:3000/api/users',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        next:{
          revalidate:5
        }
      })
      const data = await response.json()
      return data
    }catch(err){
      console.log(err)
      return []
    }
  }