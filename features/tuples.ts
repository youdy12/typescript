const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// 형식 별칭 - 재사용 가능
type Drink =  [string, boolean, number]

// const pepsi = ['brown', true, 40];  단순 배열
const pepsi: [string, boolean, number] = ['brown', true, 40]; // tuple 배열
const sprite: Drink = ['brown', true, 40]; 
pepsi[0] = 40; // 해당 순서에 맞지 않은 타입 넣으면 오류 발생
