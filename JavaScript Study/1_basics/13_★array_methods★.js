/**
 * Array Functions
 */
let iveMembers = [
    "안유진",
    "가을",
    "레이",
    "장원영",
    "리즈",
    "이서"
];

console.log(iveMembers);

console.log("---------------");

// push()
// 실행 array 마지막 끝에 추가
console.log(iveMembers.push("코드팩토리"));     //추가한 다음의 길이 반환
console.log(iveMembers);

console.log("---------------");

// pop()
// 마지막 값 제거
console.log(iveMembers.pop()); 
console.log(iveMembers);

console.log("---------------");

// shift()
// 첫번째 값 제거
console.log(iveMembers.shift()); 
console.log(iveMembers);

console.log("---------------");

// unshift()
// 첫번째 앞에 추가
console.log(iveMembers.unshift("안유진")); 
console.log(iveMembers);

console.log("---------------");

//splice
//몇번째부터 몇개를 삭제할지
console.log(iveMembers.splice(0, 3));           // 반환된 값을 다시 array로
console.log(iveMembers);

console.log("---------------");

iveMembers = [
    "안유진",
    "가을",
    "레이",
    "장원영",
    "리즈",
    "이서"
];

console.log(iveMembers);

console.log("---------------");

/**
 * 변경되지 않는 값을 사용하는 것이 추세이므로
 * 위 함수들은 사용하지 않는 것을 권장
 */

// concat()
// 기존 array를 변경하지 않고 새로운 array를 만들어 저장
console.log(iveMembers.concat("코드팩토리"));
console.log(iveMembers);

console.log("---------------");

// slice()
// 기존 array를 변경하지 않고 새로운 array를 만들어 저장
// 몇번째부터 삭제할지, 몇개를 삭제할지
console.log(iveMembers.slice(0, 3));
console.log(iveMembers); 

console.log("---------------");

// spread operator
// 배열 안에 배열을 저장
// 값을 똑같이 복사해서 저장
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
    ...iveMembers,
];
console.log(iveMembers3);

let iveMembers4 = [
    ...iveMembers,
];
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers,
] === iveMembers);          // 메모리 공간이 다름

console.log("---------------");

// 가장 많이 사용하는 함수들

// join()
// 모든 값을 string으로 엮을 때
console.log(iveMembers.join());         // 기본 표시 콤마(,)
console.log(iveMembers.join("/"));
console.log(iveMembers.join(", "));

console.log("---------------");

// sort()
// 오름차순 정렬
iveMembers.sort();
console.log(iveMembers); 
console.log(iveMembers.reverse());      //내림차순- 정렬을 반대로

//정렬을 마음대로 지정하고자 할 때
let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers); 

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b)=>{
    return a > b ? 1 : -1;
});          
console.log(numbers);                                  

numbers.sort((a, b)=> a > b ? -1 : 1);          
console.log(numbers);   

console.log("---------------");

// map()
// 모든 값을 순회하면 각 값들을 변형
// 기존 array를 변경하지 않고 새로운 array를 만들어 저장
console.log(iveMembers.map((x) => x));   
console.log(iveMembers.map((x) => `아이브: ${x}`));  

console.log(iveMembers.map((x) => {
    if(x === "안유진"){
        return `아이브: ${x}`;
    }else{
        return x;
    }
}));   
console.log(iveMembers); 

console.log("---------------");

// elements 찾는 기능들
// filter()
// 순환하면서 true면 반환 값에 들어가고 false면 반환 값에 안들어감
numbers = [1, 8,,7 ,6, 3];

console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => false));

console.log(numbers.filter((x) => x % 2 === 0));

console.log("---------------");

// find()
// filter와 마찬가지로 ture는 반환, false는 반환 안함
// 차이점은 filter는 모든 값을 찾고, find는 순서대로 보다가 첫번째 값만 반환
console.log(numbers.find((x) => true));
console.log(numbers.find((x) => false));

console.log(numbers.find((x) => x % 2 === 0));

console.log("---------------");

// findIndex()
// find와 동일하나 인덱스를 반환
console.log(numbers.findIndex((x) => x % 2 === 0));

console.log("---------------");

// reduce()
// 연산을 수행하고 누적하는 함수
// reduce 파라미터 2개 (함수(p, n), 시작하고 싶은 값)
console.log(numbers.reduce((p, n) => p + n, 0));         //p : 이전 , n : 다음