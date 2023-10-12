import * as readline from 'readline-sync';
import { getRandomNumber, isPrime } from '../helpers/helpers.js';
import runGame from '../index.js';

const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  let isWinGame = false;
  const currentNum = getRandomNumber(1, 100);
  const isPrimeNum = isPrime(currentNum);
  const rightAnswer = isPrimeNum ? 'yes' : 'no';

  console.log(`Question: ${currentNum}`);
  const answer = readline.question('Your answer: ');

  if (rightAnswer === answer) isWinGame = true;
  else console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);

  return isWinGame;
};

export default () => runGame(primeGame, taskText);
