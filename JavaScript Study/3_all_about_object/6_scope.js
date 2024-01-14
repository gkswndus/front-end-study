/**
 * Scope (범위)
 */
var numberOne = 20;

function levelOne(){
    console.log(numberOne);         //함수 밖에 있는 범위의 변수에도 접근 가능
}

// levelOne();

function levelOne(){
    var numberOne = 40;             //값을 새로 선언하는 경우 가장 가까운 범위의 변수를 가져옴

    console.log(numberOne);
}

// levelOne();

console.log(numberOne);             //함수 범위 안에서 변수를 덮어쓸시 함수 밖의 변수 변경에 영향을 주지 않음

console.log("--------------");

// 모든 선언은 가장 가까운 범위(스코프)에 있는 선언부터 활용
// 근처에 변수가 없으면 점점 상위로 가서 변수를 찾음

function levelOne(){
    var numberOne = 40;

    function levelTwo(){
        var numberTwo = 99;

        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberOne : ${numberOne}`);
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);       //현재 함수 범위에 있는 numberOne이 출력
}

levelOne();
console.log(numberOne);               // 함수 범위 안에서 변수를 덮어쓸시 함수 밖의 변수 변경에 영향을 주지 않음
// console.log(numberTwo);            // 오류 (하위 스코프에는 접근 불가능)

/**
 * JS -> Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다
 * 
 * 반대개념
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다
 */
var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();
}

function functionTwo(){             //글로벌에서 선언했으므로 글로벌 스코프
    console.log(numberThree);
}

functionOne();

console.log("--------------");

// var 키워드를 썼을 때 스코프를 새로 만들지 않음
// for-loop, if 또는 while-loop의 경우 
// var의 변수가 그대로 글로벌 스코프로 적용

var i = 999;

for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`);

i = 999;
//block level scope
for(let i = 0; i < 10; i++){                    // let과 const를 사용시 블록레벨스코프를 만들 수 있음 (새로운 스코프를 만듬)
    console.log(i);
}
console.log(`i in global scope : ${i}`);

/** 
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 * 
 */