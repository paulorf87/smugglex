import { cookies } from "next/headers"
import { sign } from "jsonwebtoken"
import { verify } from "jsonwebtoken"


export function createUserToken(username:string){
  const token = sign({username}, process.env.JWT_SECRET!, {
    expiresIn: '1h'
  })
  return token;
}

