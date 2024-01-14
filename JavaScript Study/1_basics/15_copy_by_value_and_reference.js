/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value
 * 2) 객체는 copy by reference
 */
let original = "안녕하세요";
let clone = original;

console.log(original);
console.log(clone);

console.log("---------------");
clone += " 안유진 입니다.";
console.log(original);
console.log(clone);

console.log("---------------");

let originalObj = {
    name: "안유진",
    group: "아이브",
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log("---------------");
originalObj["group"] = "코드팩토리";
console.log(originalObj);               //레퍼런스를 그대로 가져옴
console.log(cloneObj);

console.log("---------------");
console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
    name: "홍길동",
    group: "코드팩토리",
};
console.log(originalObj === cloneObj);

console.log("---------------");

const yuJin1 = {
    name: "안유진",
    group: "아이브",
}
const yuJin2 = yuJin1;
const yuJin3 = {
    name: "안유진",
    group: "아이브",
}

console.log(yuJin1 === yuJin2);     //true   복제하였기 때문에 같은 주소를 가리킴
console.log(yuJin1 === yuJin3);     //false  값은 같으나 다른 주소에 저장
console.log(yuJin2 === yuJin3);     //false

console.log("---------------");

/**
 * Spread Operator
 * copy by value (오브젝트를 새로 선언했기 때문)
 * 완전히 새로운 값으로 복사
 */
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);

console.log(yuJin4 === yuJin3);     //false

const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = {                     //순서가 중요! 뒤에 키값이 앞의 키값을 덮어버림
    name: "코드팩토리",
    ...yuJin3,
};
console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name: "코드팩토리",
};
console.log(yuJin7);

const numbers = [1, 3, 5];
const numbers2 = [
    10,
    ...numbers,
];
console.log(numbers2);