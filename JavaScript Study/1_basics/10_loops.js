/**
 * Loops
 * 
 * 1)for
 * 기준을 잡을 변수;조건(언제까지 실행);실행될 때마다 어떤 행동   -3가지를 할당
 * 2) while
 */
for(let i = 0; i < 10; i ++){
    console.log(i);
}
console.log("---------------");

for(let i = 10; i > 0; i --){
    console.log(i);
}
console.log("---------------");

for(let i = 0; i < 3; i ++){
    for(let j = 3; j > 0; j--){
        console.log(i, j);
    }    
}
console.log("---------------");

// *을 이용해서 6x6의 정사각형을 출력해라
let square = "";
let side = 6;

for(let i = 0; i < side; i ++){
    for(let j = 0; j < side; j++){
        square += "*"
    }
    square += "\n"
}
console.log(square);

console.log("---------------");

/**
 * for...in
 * looping을 할 때마다 key 값을 받음
 * array의 인덱스 값을 가져옴
 */

const yuJin = {
    name: "안유진",
    year: 2003,
    group: "아이브"
}

for(let key in yuJin){                  //키 값을 받을 때
    console.log(key);
    console.log(yuJin[key]);
}

console.log("---------------");

const iveMembersArray = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

for(let key in iveMembersArray){        //인덱스 값을 받을 때
    console.log(key);
    console.log(`${key}:${iveMembersArray[key]}`);
}

/**
 * for...of
 * looping을 할 수 있는 값에서만 사용 (list, array)
 * array의 값을 가져옴
 */
for(let value of iveMembersArray){
    console.log(value);
}

console.log("---------------");
/**
 * While
 * 계속 진행할 조건을 넣고 false가 되는 순간 루프가 끝남
 * 조건을 판단하고 코드를 실행
 */
let number = 0;

while(number < 10){
    number ++;
}
console.log(number);

console.log("---------------");
/**
 * do...while   (잘 사용하지 않음)
 * 먼저 코드를 실행하고 조건을 판단
 */
number = 0;

do{
    number ++;
}while(number < 10);

console.log(number);

console.log("---------------");
/**
 * break
 * loop를 종료시킴
 */
for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}

console.log("---------------");

number = 0;

while(number < 10) {
    if(number === 5){
        break;
    }

    number ++;
    console.log(number);
}

console.log("---------------");

/**
 * continue
 * 해당하는 조건만 건너뛰고 나머지는 그대로 진행
 */
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

console.log("---------------");

number = 0;

while(number < 10) {
    number ++;

    if(number === 5){
        continue;
    }

    console.log(number);
}