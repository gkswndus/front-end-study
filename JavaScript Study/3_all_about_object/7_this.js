/**
 * this
 * 
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가 정의 시점에서 평가된다.
 * 
 * ★★★★★ 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에서 결정된다. ★★★★★
 */
const testFunction = function(){
    return this;
}

console.log(testFunction());
console.log(testFunction() === global);        

const yuJin = {
    name: "안유진",
    year: 2003,
    sayHello: function(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

console.log(yuJin.sayHello());

function Person(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

const yuJin2 = new Person("안유진", 2003);
console.log(yuJin2.sayHello());

Person.prototype.dance = function(){
    function dance2(){
        return `${this.name}이 춤을 춥니다`;
    }

    return dance2();
}
console.log(yuJin2.dance());               


//가장 상위레벨에 함수를 선언하면 this가 자동으로 실행하는 객체로 맵핑이 되지만
//만약 그 외의 위치에 함수를 선언하면 this는 무조건 global 오브젝트에 맵핑

/**
 * this 키워드가 어떤걸 가르키냐는 3가지만 기억
 * 
 * 1) 일반 함수 호출할 땐 this가 최상위 객체(global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할 땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다.
 * 
 * 2), 3)이 아닌 경우 모두 1)의 경우
 */

/**
 * 원하는 this 값으로 맵핑하는 방법
 *
 * 1) apply() -> 아규먼트를 리스트로 입력해야 한다. / 실행하는 순간 바로 계산
 * 2) call() -> 컴마를 기반으로 아규먼트를 순서대로 넘긴다. /실행하는 순간 바로 계산
 * 3) bind() -> this를 바인딩한 후 나중에 실행
 */
function returnName(){
    return this.name;
}

console.log(returnName());

const yuJin3 = {
    name: "안유진",
}

console.log(returnName.call(yuJin3));       
console.log(returnName.apply(yuJin3));  

console.log("--------------");

function multiply(x, y, z){
    return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 3, 4, 5));
console.log(multiply.apply(yuJin3, [3, 4, 5]));

console.log("--------------");

const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc);             //저장
console.log(laterFunc());           //실행
