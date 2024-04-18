const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsMake: string[][] = [];
const catsMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// help with interface when extracing values
const car = carMakers[0];
const myCar = carMakers.pop();

// 서로 다른 요소들을 하나의 배열에 넣는 걸 막아줌
// carMakers.push(100); 문자열이 아닌 요소를 넣을 경우 오류 발생
carMakers.push('ffff');

// help with 'map', 'forEach', 'reduce'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// 배열 안에 다른 유형의 요소를 넣을 수 있음
const importantDates: (Date | string)[] = [new Date()]; 
importantDates.push('2024-03-24');
// importantDates.push(22); 선언 되지 않은 유형 넣을 경우 오류 발생

