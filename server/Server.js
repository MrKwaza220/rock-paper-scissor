const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const rooms = {}; // Create an object to store room information

app.use(express.static(path.join(__dirname, '../Creategame'))); // Serve static files from the 'Home' directory
 
// Healthcheck route
app.get('/healthcheck', (req, res) => {
    res.send('<h1>RPS App running...</h1>');
});

// Serve the main HTML file 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '../client/home.js');
});

// Socket.io connection handling
io.on('connection', (socket) => {
    console.log('a user connected');

    // Handle user disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    
     
        // Create a new game room
    socket.on('createGame', () => {
        const roomUniqueId = makeid(6);
        rooms[roomUniqueId] = {};
        socket.join(roomUniqueId);
        socket.emit("newGame", {roomUniqueId: roomUniqueId})
    });

    // Join an existing game room
    socket.on('joinGame', (data) => {
        if(rooms[data.roomUniqueId] != null) {
            socket.join(data.roomUniqueId);
            io.to(data.roomUniqueId).emit("playersConnected");
        }
    });
    
     // Handle player 1's choice
    socket.on("p1Choice",(data)=>{
        rooms[data.roomUniqueId].p1Choice = data.rpsValue;
        socket.to(data.roomUniqueId).emit("p1Choice",data);
        if(rooms[data.roomUniqueId].p2Choice != null) {
            declareWinner(data.roomUniqueId);
        }
    });
    
    // Handle player 2's choice
    socket.on("p2Choice",(data)=>{
        rooms[data.roomUniqueId].p2Choice = data.rpsValue;
        socket.to(data.roomUniqueId).emit("p2Choice",data);
        if(rooms[data.roomUniqueId].p1Choice != null) {
            declareWinner(data.roomUniqueId);
        }
    });
});

// Determine the winner of the game
function declareWinner(roomUniqueId) {
    let p1Choice = rooms[roomUniqueId].p1Choice;
    let p2Choice = rooms[roomUniqueId].p2Choice;
    let winner = null;
    if (p1Choice === p2Choice) {
        winner = "Draw";
    } else if (p1Choice == "Paper") {
        if (p2Choice == "Scissor") {
            winner = "p2";
        } else {
            winner = "p1";
        }
    } else if (p1Choice == "Rock") {
        if (p2Choice == "Paper") {
            winner = "p2";
        } else {
            winner = "p1";
        }
    } else if (p1Choice == "Scissor") {
        if (p2Choice == "Rock") {
            winner = "p2";
        } else {
            winner = "p1";
        }
    }

    // Broadcast the result to all clients in the room
    io.to(roomUniqueId).emit("result", { winner });
}

server.listen(5000, () => {
    console.log('localhost:5000');
});

// Generate a random room ID
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
