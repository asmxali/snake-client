const net = require('net');

const connect = function() {

  const conn = net.createConnection({ 
    host: '172.46.0.236',
    port: 50541
  });
 // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //lets us know when we have successfully connected by printing to the console
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => {
  //sends my player name to server
    conn.write('Name: AAA');
  });
 
  return conn;
}

module.exports = {connect};