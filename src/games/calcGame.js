import * as readline from 'readline-sync';
import {
  getRandomMathSign, getRandomNumber, calcExpression,
} from '../helpers/helpers.js';
import runGame from '../index.js';

const taskText = 'What is the result of the expression?';

const calcGame = () => {
  let isWinGame = false;
  const firstNum = getRandomNumber(0, 25);
  const secondNum = getRandomNumber(0, 10);
  const sign = getRandomMathSign();
  const expressionResult = calcExpression(firstNum, secondNum, sign);

  console.log(`Question: ${firstNum} ${sign} ${secondNum}`);
  const answer = readline.question('Your answer: ');
  const normAnswer = Number(answer);

  if (expressionResult === normAnswer) isWinGame = true;
  else console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expressionResult}'.`);

  return isWinGame;
};

export default () => runGame(calcGame, taskText);
