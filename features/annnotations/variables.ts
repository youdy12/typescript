let apples = 5;
let speed: string = "sdf";
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let colors: string[] = ["red", "green", "yellow"];
let myNumber: number[] = [1,2,3];
let truths: boolean[] = [true, false, false];

// classes
class Car {

}
let car: Car = new Car();

// object literal
let point: { x: string; y: number; } = {
  x: 'rb',
  y: 0
};

// function 
const logNumber: (i: number) => void =  (i: number) => {
  console.log(i);
};

// when to use annotations
// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number; } = JSON.parse(json);
console.log(coordinates.x);
coordinates.x


// 2) when we declare a variable on one line
// and initalizate it later
let words = ['red', 'green', 'blue'];
let founWord = false;
// let founWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    founWord = false;
  }
}

// 3) variable whose type cannot be inferred correctly 
let numbers = [-10, -1, 12];
// let numberAboveZero = false;   부울을 참조해야 하는 변수에 숫자를 할당하여 오류 발생
let numberAboveZero: boolean | number = false; // 부울 유형 값 또는 유형 번호 값을 변수에 할당할 수 있음
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}