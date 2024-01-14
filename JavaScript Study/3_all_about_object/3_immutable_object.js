/**
 * Immutable Object
 */
const yuJin = {
    name: "안유진",
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin);

/**
 * Extensible
 * 확장이 가능한지 아닌지
 * 기본값은 true
 */
console.log(Object.isExtensible(yuJin)); 

yuJin["position"] = "vocal";

console.log(yuJin);

Object.preventExtensions(yuJin);            //extensible 값을 false로 만듬

console.log(Object.isExtensible(yuJin));

yuJin["groupName"] = "아이브";              //false 상태에선 값이 추가되지 않음
console.log(yuJin);

delete yuJin["position"];                   //삭제는 가능하나, 값을 추가하는 건 불가능
console.log(yuJin);

console.log("--------------");

/**
 * Seal
 * 봉인이 되어있는지 아닌지
 * seal을 하는 것 = configurable을 false로 만드는 것과 동일
 * 
 */
const yuJin2 = {
    name: "안유진",
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin2);

console.log(Object.isSealed(yuJin2));       //봉인 확인하는 법

Object.seal(yuJin2);                        //봉인하는 법

console.log(Object.isSealed(yuJin2));

yuJin2["groupName"] = "아이브";             //봉인했기 때문에 추가/ 삭제 불가능
console.log(yuJin2);

delete yuJin2["name"];                      
console.log(yuJin2);

Object.defineProperty(yuJin2, "name", {
    value: "코드팩토리",
});
console.log(Object.getOwnPropertyDescriptors(yuJin2, "name"));    //프로퍼티 세부변경시 변경됨

Object.defineProperty(yuJin2, "name", {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptors(yuJin2, "name"));     

console.log("--------------");

/**
 * Freezed
 * 가장 높은 등급
 * 아예 동결시킴
 * 읽기 외에 모든 기능을 불가능하게 만듬
 */
const yuJin3 = {
    name: "안유진",
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3["groupName"] = "아이브";
console.log(yuJin3);

delete yuJin2["name"];                      
console.log(yuJin2);

// Object.defineProperty(yuJin3, "name", {
//     value: "코드팩토리",
// });

console.log(Object.getOwnPropertyDescriptors(yuJin3, "name"));      //enumerable을 제외하고 모두 false

console.log("--------------");

const yuJin4 = {
    name: "안유진",
    year: 2003,
    wonYoung: {
        name: "장원영",
        year: 2002,
    },    
};

Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4["wonYoung"]));           //상위 object가 프리즈 되어도, 하위 object까지 전부 프리즈가 되는 것이 아님