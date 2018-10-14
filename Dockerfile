FROM node:8.11.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm i npm@latest -g
RUN npm install

RUN npm install -g @angular/cli

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /usr/src/app

# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
ENV PORT 80
EXPOSE 80

#CMD [ "npm", "run", "start" ]
CMD ng build && node server.js