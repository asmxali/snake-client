let connection;

const setupInput = function(conn) {
  connection = conn;
  const handleUserInput = (key) => { 
    // this loops exits after you press Ctrl + C
    if (key === '\u0003') { 
      process.exit();
    } 
    if (key === 'w' ) {
      connection.write('Move: up');
    } 
    
    if (key === 's' ) {
      connection.write('Move: down');
    } 
    if (key === 'a' ) {
      connection.write('Move: left');
    } 
    if (key === 'd' ) {
      connection.write('Move: right');
    }
    if (key === '1') {
      connection.write('Say: SNAKE QUEEN!');
    }
  };

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = { setupInput };