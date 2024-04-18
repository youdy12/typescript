const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const mutiple = function (a: number, b: number): number {
  return a * b;
};

// 아무것도 반환하지 않는 함수
const logger = (message: string): void => {
  console.log(message);
};

// 함수의 끝에 도달하지 않는 함수, 오류를 발생시키고 값을 반환하지 않고 일찍 함수를 종료
const trowError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = { date: new Date(), weather: 'sunny' };

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);