/**
 * Property Attribute
 * 프로퍼티(속성)를 생성하면 자동으로 생기는 속성
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                      설정할 때 호출되는 함수로 구성된 프로퍼티
 *                      예를들어 getter와 setter
 */
const yuJin = {
    name: "안유진",
    year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, "name"));
console.log(Object.getOwnPropertyDescriptor(yuJin, "year"));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는 지 여부. false로 설정하면 프로퍼티 값 수정 불가능
 * 3) enumerable - 열거가 가능한 지 여부. for...in 룹 등을 사용할 수 있으면 true 반환
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부 판단
 *                  false인 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지
 *                  단, writable이 true인 경우 value값 변경과 writable을 false로 변경하는 건 가능.
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, "name"));

console.log(Object.getOwnPropertyDescriptors(yuJin));

console.log("--------------");

const yuJin2 = {
    name: "안유진",
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;            // new Date().getFullYear()  현재 연도
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin2);
console.log(yuJin2.age);        // getter

yuJin2.age = 32;                // setter
console.log(yuJin2.age);
console.log(yuJin2.year); 

console.log(Object.getOwnPropertyDescriptors(yuJin2, "age"));

// 재정의 하는 법
// defineProperty를 사용하는 경우 값을 직접 지정하지 않으면 기본값이 false
Object.defineProperty(yuJin2, "height", {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
});

console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

yuJin2.height = 180;
console.log(yuJin2);

/**
 * writable
 * false : 변경 불가능하게
 */
Object.defineProperty(yuJin2, "height", {
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

console.log("--------------");

yuJin2.height = 172;                // writable이 false여서 값이 변경되지 않음
console.log(yuJin2);

/**
 * Enumerable
 * false : 열거 불가능하게
 */
console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}

Object.defineProperty(yuJin2, "name", {
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));

console.log("--------------");
console.log(Object.keys(yuJin2));               // name이 존재는 하나 열거되지 않음
for(let key in yuJin2){
    console.log(key);
}
console.log(yuJin2);
console.log(yuJin2.name);

/**
 * Configurable
 * 재정의 불가능하나
 * 예외) writable: true인 경우 value 값 재정의 가능
 *       writable을 true -> false 변경 가능
 *       그러나, false -> true 변경 불가능
 */
Object.defineProperty(yuJin2, "height", {
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

// Object.defineProperty(yuJin2, "height", {
//     enumerable: false,                          // configuarable이 false여서 재정의 불가능하게 함
// });

Object.defineProperty(yuJin2, "height", {
    value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

Object.defineProperty(yuJin2, "height", {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

Object.defineProperty(yuJin2, "height", {
    writable: true,
});