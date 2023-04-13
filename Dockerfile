FROM node:lts-hydrogen
RUN "git clone https://github.com/Homework-Depo/DSN_Laboratorio_04"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=5001
EXPOSE 5001
CMD [ "npm", "start" ]