import { sign, verify } from "jsonwebtoken"


export function createUserToken(username:string){
  const token = sign({username}, process.env.JWT_SECRET!, {
    expiresIn: '1d'
  })
  return token;
}

export function decodeToken(token:string){
  
  const decoded = verify(token, process.env.JWT_SECRET!);
  return decoded;
 
}



