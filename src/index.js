import askUserName from './helpers/askUserName.js';

export default function runGame(game, taskText) {
  let winsCount = 0;

  console.log('Welcome to the Brain Games!');
  const currentUser = askUserName();
  console.log(taskText);

  while (winsCount < 3) {
    if (game(currentUser)) {
      winsCount += 1;
    } else {
      console.log(`Let's try again, ${currentUser}!`);
      break;
    }
  }

  if (winsCount === 3) console.log(`Congratulations, ${currentUser}!`);
}
