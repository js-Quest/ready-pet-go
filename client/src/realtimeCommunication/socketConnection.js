import io from 'socket.io-client';

let socket = null;

export const connectWithSocketServer = () => {
  socket = io('http://localhost:3001');

  socket.on('connect', () => {
    console.log('successfully connected with socket.io server');
    console.log(socket.id);
  })
};