import * as readline from 'readline-sync';
import { getRandomNumber, isEven } from '../helpers/helpers.js';
import runGame from '../index.js';

const taskText = 'Answer "yes" if the number is even, otherwise answer "no".';

const askParity = () => {
  let isWinGame = false;
  const curNum = getRandomNumber();

  console.log(`Question: ${curNum}`);
  const answer = readline.question('Your answer: ');
  const normAnswer = answer.toLocaleLowerCase();

  switch (true) {
    case !isEven(curNum) && normAnswer !== 'no':
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      break;

    case isEven(curNum) && normAnswer !== 'yes':
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      break;

    default:
      console.log('Correct!');
      isWinGame = true;
  }

  return isWinGame;
};

export default () => runGame(askParity, taskText);
