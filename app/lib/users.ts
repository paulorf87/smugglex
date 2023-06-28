import { cookies } from "next/headers"
import { sign } from "jsonwebtoken"

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

export function createUserToken(username:string){
  const token = sign({username}, process.env.JWT_SECRET!, {
    expiresIn: '1h'
  })
  return token;
}

