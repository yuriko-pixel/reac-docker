FROM node
ENV REACT_APP_NAME=myApp
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]