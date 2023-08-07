FROM node:20-alpine-3.17

# Install dependencies

WORKDIR /app

COPY package.json .
COPY  package.lock.json . 

# install modules 
RUN npm install 


COPY . ./

CMD ["npm", "run","dev"]