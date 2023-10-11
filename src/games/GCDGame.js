import * as readline from 'readline-sync';
import {
  getRandomNumber, findGCD,
} from '../helpers/helpers.js';
import runGame from '../index.js';

const taskText = 'Find the greatest common divisor of given numbers.';

const GCDGame = () => {
  let isWinGame = false;
  const firstNum = getRandomNumber(1, 60);
  const secondNum = getRandomNumber(1, 60);
  const currentGCD = findGCD(firstNum, secondNum);
  // const currentGCD = 1;

  console.log(`Question: ${firstNum} ${secondNum}`);
  const answer = readline.question('Your answer: ');
  const normAnswer = Number(answer);

  if (currentGCD === normAnswer) isWinGame = true;
  else console.log(`'${answer}' is wrong answer ;(. Correct answer was '${currentGCD}'.`);

  return isWinGame;
};

export default () => runGame(GCDGame, taskText);
