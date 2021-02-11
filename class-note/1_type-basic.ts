// JS 문자열 선언
//const str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10]
let items: number[] = [1, 2, 3];

// TS 튜플 : 인덱스의 타입까지 정의
let address: [string, number] = ['pyeongtaek', 10];

// TS 객체
let obj: object = {};
// let person: object = {
//   name: 'capt',
//   age: 100
// };

let person: { name: string, age: number } = {
  name: 'capt',
  age: 100
}

// TS 진위값
let show: boolean = true;