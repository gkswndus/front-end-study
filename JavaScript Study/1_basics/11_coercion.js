/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적   -기능적으로는 가능하나 헷갈리기 때문에 사용 X
 */
let age = 32;

// 명시적
let stringAge = age.toString();                 // 숫자 ->문자 타입 직접 변환
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + "";                            // 숫자 -> 문자 타입 자동 변환
console.log(typeof test, test);

console.log("98" + 2);          // 어느 한쪽으로 타입을 변환해야 하기때문에
console.log("98" * 2);          //문자에는 곱한다의 개념이 없어서 숫자로 변환
console.log("98" - 2); 

console.log("---------------");
/**
 * 명시적 변환 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt("0"), parseInt("0"));                  //실수 변환시 (소수점으로 넣어도 정수로 바뀜)
console.log(typeof parseFloat("0.99"), parseFloat("0.99"));        //소수점 변환시
console.log(typeof +"1", +"1");

console.log("---------------");
/**
 * Boolean 타입으로의 변화   -실무에서 많이 사용
 * string 값 안에 어떤 값이든 들어있으면 Boolean 기준에서는 true 로 인식
 */
console.log(!"x");
console.log(!!"x");
console.log(!!"");       // 값이 안들어있으면 false

console.log(!!0);
console.log(!!"0");
console.log(!!"false");
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});      // object와 array는 값이 들어있든 안들어있는 true
console.log(!![]);

/**
 * False로 반환하는 경우
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 */