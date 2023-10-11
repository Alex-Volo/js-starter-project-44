import * as readline from 'readline-sync';

export default function askUserName() {
  console.log('Welcome to the Brain Games!');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
}