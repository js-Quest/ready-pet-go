import io from 'socket.io-client';

let socket = null;

const connectWithSocketServer = () => {
  socket = io('http://localhost:3001');

  socket.on('connect', () => {
    console.log('successfully connected with socket.io server');
    console.log(socket.id);
  })
};

export default connectWithSocketServer