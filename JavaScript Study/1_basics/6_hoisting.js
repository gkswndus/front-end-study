/**
 * Hoisting
 */
console.log("Hello");
console.log("World");

// console.log(name);
// var name = "코드팩토리";
// console.log(name);

// var name;
// console.log(name);
// name = "코드팩토리"
// console.log(name);        // 위 주석과 같은 의미

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기
 */

console.log(yuJin);
let yuJin = "안유진";       // 에러 -변수는 존재하나(let과 const도 호이스팅이 됨) 선언 전이면 접근할 수 없게 막음
const yuJin = "안유진";     // var는 이를 막지를 못하고, let과 const는 선언하고 초기화하기 전에 미리 값을 가져오는 것을 방지
