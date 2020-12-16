import io from 'socket.io-client'

let socket

export const initiateSocket = (room, username) => {
  socket = io();
  console.log(`Connecting socket...`);
  if (socket && room) socket.emit('join', {room, username});
}

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}

export const subscribeToChat = (cb) => {
  if (!socket) return(true);
  socket.on('chat', data => {
    console.log('Websocket event received!');
    return cb(null, data);
  });
}

export const sendMessage = (room, message) => {
  if (socket) socket.emit('chat', { room, message });
}

export const loadData = (cb) => {
  if (!socket) return(true);

  socket.on('userJoined', socketHistory => {
    console.log("History recieved", socketHistory)
    return cb(null, socketHistory)
  })
  socket.on('userDisconnect', socketHistory => {
    console.log("History recieved", socketHistory)
    return cb(null, socketHistory)
  })
}

export const myDisconnect = (room, username) => {
  if (socket) socket.emit('userDisconnected', { room, username });
} 