// function logText(text: string) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('문지열');

//호출시점에 타입을 넘긴다.
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

// 호출할 때 type을 정의
const a = logText<string>('하이');
console.log(a);
a.split('');

const flag = logText<boolean>(true);

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText('a');
// a.split('') // error - 유니온 타입의 문제점
// logText(10);

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<number> = { value: 1, selected: true }

