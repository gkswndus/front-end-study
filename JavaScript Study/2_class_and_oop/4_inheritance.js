/**
 * Inheritance (상속)
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance(){
        return `여자 아이돌이 춤을 춥니다.`;
    }
}
class MaleIdolModel extends IdolModel {
    sing(){
        return `남자 아이돌이 노래를 부릅니다.`;
    }
}

const yuJin = new FemaleIdolModel("안유진", 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel("지민", 1995);
console.log(jiMin);

console.log(yuJin.name);
console.log(yuJin.dance());

console.log(jiMin.name);
console.log(jiMin.sing());

// console.log(yuJin.sing());       오류
// console.log(jiMin.dance());      오류

const cf = new IdolModel("코드팩토리", 1992);
console.log(cf);

console.log(cf.name);
// console.log(cf.dance());         오류

console.log("---------------");

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);            // 같은 레벨의 자식 클래스와는 아무런 관계 없음

console.log("---------------");

console.log(jiMin instanceof IdolModel);
console.log(jiMin instanceof FemaleIdolModel);
console.log(jiMin instanceof MaleIdolModel);

console.log("---------------");

console.log(cf instanceof IdolModel);
console.log(cf instanceof FemaleIdolModel);
console.log(cf instanceof MaleIdolModel);
