/**
 * Using function to create objects
 * 
 * new 안쓰는 실수 방지
 * if문은 ture일 때 실행되는데
 * new.target은 new를 쓰지않은 객체를 가리키고, 그 객체는 undefined 값을 출력 (=false)
 * 따라서 !new.target은 ture로 출력되므로
 * new를 쓰지않은 객체일때 return 값을 출력
 */
function IdolModel(name, year){
    if(!new.target){                           
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function(){
        return `{this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
// console.log(yuJin.dance());

const yuJin2 = IdolModel("안유진", 2003);       // new 키워드를 안쓰면 undefined로 출력
console.log(yuJin2);     
// console.log(global.name);                       //파일을 생성할 때 자동으로 생성되는 객체.                   