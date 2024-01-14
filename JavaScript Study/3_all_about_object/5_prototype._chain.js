/**
 * Prototype
 */
const testObj = {};

console.log("--------------");

// __proto__ 는 모든 객체에 존재하는 프로퍼티
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값
console.log(testObj.__proto__);         // undefined가 아닌 객체가 출력

function IdolModel(name, year){
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);       // undefined가 아닌 객체(값이 감춰짐)가 출력

console.dir(IdolModel.prototype, {     // 숨겨진 값 보이게 하는 방법
    showHidden: true,
});

console.log("--------------");

// circular reference
// 서로가 서로를 참조하는 상태
console.log(IdolModel.prototype.constructor === IdolModel);     // 실제로 동일함을 증명
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype); 

console.log("--------------");

console.log(testObj.__proto__ === Object.prototype);

console.log("--------------");

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);

console.log("--------------");

// IdolModel의 부모는 Function의 부모는 Object
// IdolModel의 최상위객체는 Object

console.log(yuJin.toString());                    // 에러가 없는 것은 toStirng 이라는 함수가 존재하기 때문
console.log(Object.prototype.toString());         // Object의 프로토타입에 있는 toString에서 상속 받은 것

console.log("--------------");

function IdolModel2(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2("안유진", 2003);
const wonYoung2 = new IdolModel2("장원영", 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello() === wonYoung2.sayHello());         // 각 고유의 값의 this를 받기 때문에 서로 다른 주소

console.log(yuJin2.hasOwnProperty("sayHello"));       //상속 받은 프로퍼티인지?(false) 고유의 프로퍼티인지?(true) 확인

console.log("--------------");

// 중복 없애기
function IdolModel3(name, year){
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function(){
    return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3("안유진", 2003);
const wonYoung3 = new IdolModel3("장원영", 2002);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());
console.log(yuJin3.sayHello() === wonYoung3.sayHello());        // 동일한 프로퍼티에서 값을 불러오기 때문에 true = 리소스를 효율적으로 사용

console.log(yuJin3.hasOwnProperty("sayHello"));             //상속받은 프로퍼티이므로 false

console.log("--------------");

IdolModel3.sayStaticHello = function(){                            //모든 함수는 객체이기 때문
    return `안녕하세요 저는 static method 입니다.`;                 //스태틱이므로 인스턴스에는 이 값이 존재하지 않음
}

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */
function IdolModel4(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `안녕하세요 저는 인스턴스 메서드입니다!`         
    }
}

// IdolModel4.prototype.sayHello = function(){
//     return `안녕하세요 저는 prototype 메서드입니다!`
// }

const yuJin4 = new IdolModel4("안유진", 2003);

// 프로퍼티 셰도잉 - class에서 override와 동일
console.log(yuJin4.sayHello());

console.log("--------------");

// 프로토타입 변경 가능 = 상속받는 클래스를 변경할 수 있음
// 인스턴스를 생성한 다음에도 가능

/**
 * getPrototypeOff, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year){
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function(){
    return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year){
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}가 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel("가을", 2004);
const ray = new FemaleIdolModel("레이", 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);         //getPrototypeOf 는 파라미터의 프로토타입을 가져옴   

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// console.log(ray.sayHello());             // 오류

console.log("--------------");

Object.setPrototypeOf(ray, IdolModel.prototype);                        //setPrototypeOf 는 파라미터의 프로토타입을 바꿔줌
console.log(ray.sayHello()); 

console.log(ray.constructor === FemaleIdolModel);                       //모든 프로토타입은 기본적으로 컨스트럭터가 존재
console.log(ray.constructor === IdolModel); 
console.log(gaEul.constructor === IdolModel);
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);         //원래 프로토타입은 그 값인 객체의 연결만 끊김
                                                                        // 변경된 객체는 변경 전 프로토타입의 상속을 받지 않음

console.log("--------------");

FemaleIdolModel.prototype = IdolModel.prototype;                        // 프로토타입을 동일하게 임의로 변경       
const eSeo = new FemaleIdolModel("이서", 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);     
console.log(FemaleIdolModel.prototype === IdolModel.prototype);