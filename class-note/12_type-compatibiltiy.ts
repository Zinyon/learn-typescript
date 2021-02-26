interface Developer {
  name: string;
  skill: string;
}

class Person {
  name: string;
  skill: string;
}

var developer: Developer;
var person: Person;
developer = person;
developer = new Person();

// 함수
var add = function (a: number) {
  // ...
}

var sum = function (a: number, b: number) {
}

// 왼쪽보다 오른쪽이 더 크면 할당 가능
sum = add;
add = sum;

// 제네릭
interface Empty<T> {

}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// error
notempty1 = notempty2;
notempty2 = notempty1;

