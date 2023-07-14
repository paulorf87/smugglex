import { JwtPayload, sign, verify } from "jsonwebtoken" 
import { PrismaClient } from "@prisma/client"


export function createUserToken(username:string){
  const token = sign({username}, process.env.JWT_SECRET!, {
    expiresIn: '1d'
  })
  return token;
}

export function decodeToken(token:string){
  try{
    const decoded = verify(token, process.env.JWT_SECRET!);
    return decoded;

  }catch(err){
    console.log("[decodeToken: error]","error decoding token");
    return null;
  }
 
}


export async function whoAmISSR(token:string){
  const prisma = new PrismaClient();

  const decoded = decodeToken(token) as JwtPayload;
  if(decoded){
    const { username } = decoded;
    const user = await prisma.user.findFirst({
      where: {
        username: username,
      }
    })
    if (!user) {
      prisma.$disconnect();
      return null;
    }else {
      const {name, username, avatarUrl, ...rest} = user;
      prisma.$disconnect();
      return user;
    }

  }else{
    return null;
  }
}
