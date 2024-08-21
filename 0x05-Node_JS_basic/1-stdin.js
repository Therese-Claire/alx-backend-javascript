/*
 * Displays welcome message
 * Takes name from user
 * displays user's name
 * ends the program
 */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?', name => {
  console.log(`Your name is: ${name}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
