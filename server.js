const app = require("./app");
const http = require("http");
const socketIo = require("socket.io");

const server = http.createServer(app);
const io = socketIo(server);

const notificationRoutes = require('./src/routes/notification.route')
app.use('/api', notificationRoutes(io)); 

io.on("connection", (socket) => {
  console.log("A client connected : ", socket.id);
});


const PORT = process.env.PORT || 9000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

