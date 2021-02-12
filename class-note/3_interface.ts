interface User{
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스
var seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 활용한 인터페이스
function getUser(user : User): void{
  console.log(user);
}

const capt: User = {
  name: '캡틴',
  age: 100
}

getUser(capt);

// 함수의 스펙(구조)에 활용한 인터페이스
interface SumFunction{
  (a: number, b:number): number;
}

var sum: SumFunction;
sum = function(a:number, b:number){
  return a+b;
}

// 인덱싱 
interface StringArray{
  [index: number]: string;
}

var arr: StringArray = ['a','b','c'];
arr[0] = 'a';

// 딕셔너리 패턴
interface StringRegexDictionary{
  [key: string]: RegExp
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/
}

// 인터페이스 확장
interface Person{
  name: string;
  age: number;
}

interface Developer extends Person{
  language: string;
}

var zzin: Developer = {
  language: 'javacsript',
  age: 100,
  name: '진영'
}