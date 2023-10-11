export const getRandomNumber = (min = 0, max = 100) => {
  const diff = max - min;
  return Math.floor((Math.random() * (diff + 1)) + min);
};

export const isEven = (num) => !(num % 2);

export const getRandomMathSign = () => {
  const signs = ['+', '-', '*'];
  const index = getRandomNumber(0, 2);
  return signs(index);
};
