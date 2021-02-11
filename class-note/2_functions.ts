// 함수에 타입을 정의하는 방식
function sumT(a: number, b: number): number {
  return a + b;
}

sumT(10, 20, 30, 40);

// 옵셔널 파라미터
function log(a: string, b?: string) {

}

log('hello world');
log('hello world', 'abc');
