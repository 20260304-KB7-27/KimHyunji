// 구조분해할당
// - 배열이나 객체에 들어있는 값을 더 짧고 편하게
// - 원하는 변수에 나누어 담는 문법

//배열 구조분해할당

const fruits = ['apple', 'banana', 'orange'];

// const [a, b, c] = fruits;

// console.log(a);
// console.log(b);
// console.log(c);

const [a, b] = fruits;
//const [a, ,b] = fruits; -> 1,3번째꺼가 나옴.

console.log(a);
console.log(b);

// 객체
const student = {
  name: '김학생',
  age: 20,
  major: '컴공',
};

//객체를 구조분해 할당할때는 Key 값이 중요
//원하는 변수명으로 받고싶을 경우 -> {기존 key: 새로운 변수명}
//const {a,b,c} = student;->출력 안됨 / but, 배열 구조분해는 순서만 맞추면 됨
//const {name, age, major} = student;
const { name: student_name, age: student_age, major } = student;

// console.log(name);
// console.log(age);
// console.log(major);

const person = {
  username: 'hong',
  city: 'Seoul',
};

function printUser({ username, city }) {
  console.log(`사용자 이름: ${username}`);
  console.log(`사용자 도시: ${city}`);
}
printUser(person);
