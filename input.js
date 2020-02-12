

const setupInput = function() {
  const handleUserInput = (key) => { 
    // this loops exits after you press Ctrl + C
    if (key === '\u0003') { 
      process.exit();
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