/**
 * All about objects
 * 
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */
// 1. 오브젝트
const yuJin = {
    name: "안유진",
    year: 2003,
};
console.log(yuJin);

console.log("--------------");

//2. 클래스
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
console.log(new IdolModel("안유진", 2003));

console.log("--------------");

//3. 생성자 함수
function IdolFunction(name, year){                  //대문자로 작성. 컨스트럭터에서 파라미터를 받는 것 처럼
    this.name = name;
    this.year = year;
}

const gaEul = new IdolFunction("가을", 2002);
console.log(gaEul);