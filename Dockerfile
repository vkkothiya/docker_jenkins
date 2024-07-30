FROM node:latest

COPY . /Practices/DevOps/Jenkins/docker_jenkin

WORKDIR /Practices/DevOps/Jenkins/docker_jenkin

RUN npm install

EXPOSE 4000

CMD [ "node" , "index" ]
