/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);
console.log(10 * (10+10));

console.log("---------------");

/**
 * 증가와 감소
 */
let number = 1;

number ++;          // 1을 더하고 변수에 저장
console.log(number);

number --;
console.log(number);
console.log("---------------");

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++; // 뒤에다 하는 경우 -다른 오퍼레이터 먼저 실행 후 증가/감소 오퍼레이터 실행
console.log(result, number);

result = number --;
console.log(result, number); 

result = ++ number; // 거의 사용 X
console.log(result, number); 

result = -- number;
console.log(result, number); 

console.log("---------------");

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */
let sample = "99";

console.log(sample);
console.log(typeof sample); // 문자

console.log(+sample);
console.log(typeof +sample); // 숫자

sample = true;
console.log(+sample);
console.log(typeof +sample); //true = 1

sample = false;
console.log(+sample);
console.log(typeof +sample); //false = 0

sample = "안유진";
console.log(+sample);
console.log(typeof +sample); //NaN -> Not a Number

sample = "99";
console.log(-sample);
console.log(typeof -sample);

console.log("---------------");

/**
 * 할당 연산자 (assignment operator)
 */
number =  100;
console.log(number);

number += 10;               //계산한 값을 변수에 다시 저장
console.log(number);

number -= 10;               
console.log(number);

number *= 10;               
console.log(number);

number /= 10;               
console.log(number);

number %= 10;               
console.log(number);

console.log("---------------");

/**
 * 비교 연산자
 * 
 * 1) 값의 비교 == (사실상 잘 사용하지 않음)
 * 2) 값과 타입의 비교 === (일반적으로 사용)
 */

console.log(5 == 5);
console.log(5 == "5"); //오른쪽 타입의 값을 숫자로 변경했을 때 왼쪽 타입의 값과 똑같기 때문 true
console.log(0 == "");
console.log(true == 1);
console.log(false == 0);
console.log(true == "1");
console.log("---------------");

console.log(5 === 5);
console.log(5 === "5");  //변환되는 값이 같더라도 타입이 다르면 false
console.log(0 === "");
console.log(true === 1);
console.log(false === 0);
console.log(true === "1");
console.log("---------------");

console.log(5 != 5);      // 같지 않다 = "!"
console.log(5 != "5"); 
console.log(0 != "");
console.log(true != 1);
console.log(false != 0);
console.log(true != "1");
console.log("---------------");

console.log(5 !== 5);
console.log(5 !== "5");
console.log(0 !== "");
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== "1");

console.log("---------------");

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

console.log("---------------");

/**
 * 삼항 조건 연산자 (ternary operator)
 * 물음표의 기준으로 조건을 넣고
 * 왼쪽은 true일 때 값을 반환
 * 오른쪽은 false일 때 값을 반환
 */
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

console.log("---------------");

/**
 * 논리 연산자
 * 
 * 1) &&   and
 * 2) ||   or
 */

// && 조건은 모두 true여야 true를 반환
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log("---------------");

// || 조건은 하나만 true여도 true를 반환
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log("---------------");

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log("---------------");

/**
 * 단축평가 (short circuit evaluation)   -그냥 외우기
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */
console.log(true && "아이브");
console.log(false && "아이브");
console.log(true || "아이브");
console.log(false || "아이브");

console.log(true && true && "아이브");
console.log(true && false && "아이브");

console.log("---------------");

/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(10 ** 3);

console.log("---------------");

/**
 * null 연산자
 * ?? 일 때는 좌측 값이 null 이거나 undefined 일때 오른쪽 값을 반환
 */
let name;
console.log(name);  //name이 undefined

name = name ?? "코드팩토리";
console.log(name);

name = name ?? "아이브"; //undifined에서 코드팩토리로 저장되었기 때문
console.log(name);

let name2;          // 간단하게 작성
name2 ??= "코드팩토리";
console.log(name2);