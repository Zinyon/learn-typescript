// function logText(text: string) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('문지열');

// 호출시점에 타입을 넘긴다.
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

logText<string>('하이');
