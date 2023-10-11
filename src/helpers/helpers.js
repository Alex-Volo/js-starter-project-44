export const getRandomNumber = (min = 0, max = 100) => {
  const diff = max - min;
  return Math.floor((Math.random() * (diff + 1)) + min);
};

export const isEven = (num) => !(num % 2);

export const getRandomMathSign = () => {
  const signs = ['+', '-', '*'];
  const index = getRandomNumber(0, 2);
  return signs[index];
};

export const calcExpression = (firstNum, secondNum, sign) => {
  switch (sign) {
    case '+':
      return firstNum + secondNum;

    case '-':
      return firstNum - secondNum;

    case '*':
      return firstNum * secondNum;

    default:
      return 0;
  }
};

export const findGCD = (firstN, secondN) => {
  let a = firstN;
  let b = secondN;
  let r;
  while (b !== 0) {
    r = Math.abs(a % b);
    a = b;
    b = r;
  }
  return (a < 0) ? -a : a;
};
