import * as readline from 'readline-sync';

const getRandomNumber = (min = 0, max = 100) => {
  const diff = max - min;
  return Math.floor((Math.random() * (diff + 1)) + min);
};

const isEven = (num) => !(num % 2);

const askParity = (userName = 'John Dow') => {
  let isWinGame = true;
  const curNum = getRandomNumber();
  console.log(`Question: ${curNum}`);
  const answer = readline.question('Your answer: ');
  const normAnswer = answer.toLocaleLowerCase();

  switch (true) {
    case isEven(curNum) && normAnswer === 'yes':
      console.log('Correct!');
      break;

    case !isEven(curNum) && normAnswer === 'no':
      console.log('Correct!');
      break;

    case isEven(curNum) && normAnswer === 'no':
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${userName}!`);
      isWinGame = false;
      break;

    default:
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${userName}!`);
      isWinGame = false;
  }

  return isWinGame;
};

export default askParity;
