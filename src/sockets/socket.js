
module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('New User connected:', socket.id);
  
      socket.on('newMessage', (message) => {
        console.log('New message posted:', message);
        io.emit('notifyClients', { message: 'New message received', content: message });
      });
  
      socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
      });
    });
    
  };
  