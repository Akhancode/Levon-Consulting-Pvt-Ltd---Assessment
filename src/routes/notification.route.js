const express = require('express');
const router = express.Router();

module.exports = function(io) {
  // POST endpoint to trigger notifications
  router.post('/message', (req, res) => {
    const { message } = req.body;
    
    if (message) {
      io.emit('notification', { message });
      res.status(200).send('Notification sent');
    } else {
      res.status(400).send('Message is required');
    }
  });

  return router;
};
