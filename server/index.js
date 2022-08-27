import express from "express"
import http from "http"

import {Server} from "socket.io"

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.get("/", (req, res) => res.status(200).send({success: true, message: "Hello world!"}))

io.on('connection', (socket) => {
    console.log('a user connected');
  });
  

app.listen(3000, () => {
    console.log('Listenging to port 3000');
})

