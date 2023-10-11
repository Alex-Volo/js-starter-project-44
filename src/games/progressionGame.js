import * as readline from 'readline-sync';
import {
  getRandomMathSign, getRandomNumber, calcExpression,
} from '../helpers/helpers.js';
import runGame from '../index.js';

const taskText = 'What number is missing in the progression?';

const progressionGame = () => {
  let isWinGame = false;
  const start = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(1, 10);
  const sign = getRandomMathSign();

  const evalProgressionElemet = (_, index) => (
    calcExpression(start, progressionStep * index, sign)
  );
  const currentProgression = Array.from({ length: 10 }, evalProgressionElemet);
  const randomIndex = getRandomNumber(0, 9);
  const rightAnswer = currentProgression[randomIndex];
  currentProgression[randomIndex] = '..';

  console.log(`Question: ${currentProgression.join(' ')}`);
  const answer = readline.question('Your answer: ');
  const normAnswer = Number(answer);

  if (rightAnswer === normAnswer) isWinGame = true;
  else console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);

  return isWinGame;
};

export default () => runGame(progressionGame, taskText);
