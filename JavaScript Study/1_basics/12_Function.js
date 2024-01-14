/**
 * function -> 함수
 */

/**
 * 만약 2라는 숫자에 * 10/ 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());            // 2 말고 3으로 하고 싶을 때

console.log("---------------");
/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 * 코드를 반복하지 말라
 * 코드를 한번만 짜고 인풋만 바꿀 수 있게 하는 것이 함수
 */
function calculate() {
    console.log((2 * 10 / 2 % 3).toString());
}

calculate();

console.log("---------------");

/**
 * 인풋 값만 바꿔서 계산하고 싶을 때 파라미터 사용
 * parameter: 함수에서 입력받는 값에 대한 정의      number
 * argument: 실제 입력하는 값                       3,  4
 */
function calculate(number){                         
    console.log((number * 10 / 2 % 3).toString());
}                                    

calculate(3);
calculate(4);

console.log("---------------");

function multiply(x, y){
    console.log(x * y);
}

multiply(2, 4);

function multiply(x, y = 10){         //y의 디폴트 값을 정해준 경우
    console.log(x * y);
}

multiply(2, 4);
multiply(2);

console.log("---------------");

/**
 * 반환받기
 * return 받기
 * 함수 외부에서 실행을 한 결과 값을 반환받고 싶을 때
 */
function multiply2(x, y){
    // console.log(x * y);          / 그저 출력을 위한 명령/
    return x * y;                   // return 키워드를 사용하여 반환한 값을 저장
}

const result1 = multiply2(2, 4);
console.log(result1);

const result2 = multiply2(4, 5);
console.log(result2);

/**
 * Arrow 함수
 * 선언하는 방식이 다름
 */
const multiply3 = (x, y) => {
    return x * y;
}
console.log(multiply3(3, 4));

const multiply4 = (x, y) => x * y;      // 위 코드를 간결하게
console.log(multiply4(4, 5));

const multiply5 = x => x * 2;      // 파라미터를 하나만 받는 경우 더 간결
console.log(multiply5(2));

const multiply6 = x => y => z => `x: ${x} y: ${y} z: ${z}`
console.log(multiply6(2)(5)(7));

function multiply7(x){
    return function(y){
        return function(z){
            return `x: ${x} y: ${y} z: ${z}`
        }
    }
}
console.log(multiply7(2)(5)(7));

console.log("---------------");

const multiplyTwo = function(x, y) {
    return x * y;
}
console.log(multiplyTwo(4, 5));

const multiplyThree = function(x, y, z) {
    console.log(arguments);                      //함수를 실행할 때 입력한 값을 순서대로 반환
    return x * y * z;
}

console.log(multiplyThree(4, 5, 6));

console.log("---------------");

const multiplyAll = function (...arguments){     //무한으로 파라미터를 받음
    return Object.values(arguments).reduce((a, b) => a * b, 1);     // 실제 입력된 argument의 값을 하나씩 곱해서 반환
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

console.log("---------------");

/**
 * immediately invoked function
 * 즉시 실행 함수 : 함수를 정의하자마자 실행
 */
(function(x, y){
    console.log(x * y);
})(4, 5)                

console.log("---------------");

console.log(typeof multiply);
console.log(multiply instanceof Object);        // instanceof : 좌측 타입이 우측 타입이랑 같은지? (함수 = 오브젝트)