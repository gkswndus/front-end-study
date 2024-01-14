/**
 * Getter and Setter
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /** 
     * Get
     * 값을 가져올 때 사용
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     * 함수를 변수처럼 사용
     */
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }
    /**
     * set
     * 값을 새로 저장할 때 사용
     * 무조건 파라미터를 받아야 함
     * 프라이빗한 값에 접근 가능하게 함
     * 정의한 값을 변경하기 때문에 선호하지 않음
     */
    set setName(name){
        this.name = name;
    }
}
const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);                 //get을 쓰면 하나의 변수(키)인 것 처럼 사용 가능

yuJin.setName = "장원영";                       //set 파라미터에 입력
console.log(yuJin);

console.log("---------------");

// 프라이빗 값 (#) -ES7
// 실제로 값은 저장했으나 외부에서 엑세스를 못하는 값
class IdolModel2{
    #name;                               //프라이빗한 값
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;              //프라이빗한 값을 가져올 때
    }

    set name(name){
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2("안유진", 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = "코드팩토리";
console.log(yuJin2.name);