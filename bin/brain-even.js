#!/bin/env node
import askUserName from '../src/askUserName.js';
import askParity from '../src/evenGame.js';

let winsCount = 0;

const currentUser = askUserName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (winsCount < 3) {
  if (askParity(currentUser)) {
    winsCount += 1;
  } else {
    break;
  }
}

if (winsCount === 3) console.log(`Congratulations, ${currentUser}!`);
