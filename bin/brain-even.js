#!/bin/env node
import askUserName from '../src/cli.js';
import askParity from '../src/evenGame.js';

let winsCount = 0;

console.log('Welcome to the Brain Games!');
const userName = askUserName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (winsCount < 3) {
  if (askParity(userName)) {
    winsCount += 1;
  } else break;
}

if (winsCount === 3) console.log(`Congratulations, ${userName}!`);
