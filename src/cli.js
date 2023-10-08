import * as readline from 'readline-sync';

export function askUserName () {
    const userName = readline.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
}