// 스레드(단일,멑티) > 단일 프로세스
// 스레드, 스레드, 스레드 > 단일 프로세스  > 멀티 프로세스
// 스레드, 스레드, 스레드 > 단일 프로세스

// 프로세스 > 독립된 메모리 공간, 프로세스 간읜 자원 공유 x, 별도의 통신을 사용
// 스레드 > 같은 메모리 공간 공유, 스레드 간읜 자원 공유가 간단



// 변수선언
const text = 'constants'
// text = 'ddd' // error (상수 재활당 x)
// test = 'dsdd0d' // error (let 변수 호이스팅 x)
let test = 'test'
test = '1111444'
vartest = 'var111' // not error (var 키워드는 hoisting 가능)
test = 'test111'
var vartest = 'var'

console.log(text,test,vartest)

// 구조분해할당
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3

// 객체 구조 분해 할당
const person = {
  name: 'Alice',
  age: 25,
  city: 'Seoul'
};
const { name:oname, age } = person;
console.log(oname, age); // Alice 25

// 클래스 사용
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return 1+1
    }
}

let rt = new Rectangle()

let ddd = rt.getArea()

console.log(ddd)
// test = '2222'

// console.log(test)

// 화살표(애로우) 함수
let add = (a,b) => a+b
calc = add(1,2)

console.log(calc)

// 템플릿 리터럴
const namev = 'buchet'
const message = `안녕, ${namev}! 오늘은 화창한 날씨입니다.`;

console.log(message)