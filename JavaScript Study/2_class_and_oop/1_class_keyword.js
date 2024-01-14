/**
 * Class Keyword
 * 클래스는 무조건 대문자로 시작
 */
// class IdolModel{                   // 틀을 정의
//     name = "안유진";               // 기본값 설정(옵션)
//     year = 2003;
// }

// const yuJin = new IdolModel();          
// console.log(yuJin);                 //클래스에 해당되는 객체 생성

// constructor - 생성자 
// 파라미터를 받아 여러 인스턴스를 생성하고 싶을 때
// 한번 틀을 만들면 반복해서 인스턴트를 계속 생성 가능

class IdolModel{
    // name;                                     // 프로퍼티 (함수, 변수)
    // year;                                     // 프로퍼티를 생략해도 가능하나 정의를 해놓는 습관이 좋음 

    constructor(name, year){                     // 외부에서 입력받은 파라미터
        this.name = name;                        // this는 현재 함수의 있는 name(틀) 의미, 뒤의 name은 입력받는 name(파라미터) 의미. name(틀): name(파라미터) 다.
        this.year = year;
    }

    sayName(){                                   // method 메소드 : 클래스 안에 함수를 정의
        return `안녕하세요 저는 ${this.name}입니다.`   
    }
}                                                // function 없이 함수표시() 만 넣어줘도 함수로 인식

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
const gaeul = new IdolModel("가을", 2002);
console.log(gaeul);
const ray = new IdolModel("레이", 2004);
console.log(ray);
const wonYoung = new IdolModel("장원영", 2004);
console.log(wonYoung);
const liz = new IdolModel("리즈", 2004);
console.log(liz);
const eseo = new IdolModel("이서", 2007);
console.log(eseo);

console.log("---------------");

console.log(yuJin.name);                     // 객체처럼 사용 가능
console.log(yuJin.year);

console.log("---------------");

console.log(yuJin.sayName());
console.log(wonYoung.sayName());

console.log("---------------");

console.log(typeof IdolModel);               // class는 함수
console.log(typeof yuJin);                   // calss로 생성한 인스턴스는 객체