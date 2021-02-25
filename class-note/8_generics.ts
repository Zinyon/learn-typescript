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

// 인터페이스로 제네릭 선언
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<number> = { value: 1, selected: true }

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);

  return text;
}

logTextLength<string>(['hi', 'abc'])

// 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength2(10);
logTextLength2({ length: 10 })

// keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');