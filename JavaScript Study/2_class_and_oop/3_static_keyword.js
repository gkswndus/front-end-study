/**
 * Static Keyword
 * 클래스에 귀속되도록
 */
// class IdolModel{
//     name;
//     year;
//     static groupName = "아이브";           // 객체 귀속되지 않음

//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }

//     static returnGroupName(){
//         return "아이브";
//     }
// }

// const yuJin = new IdolModel("안유진", 2003);        // new는 객체를 만들 때 쓰는 키워드
// console.log(yuJin);

// console.log(IdolModel.groupName);                   // 클래스 자체에 귀속
// console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){          
        return new IdolModel(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new IdolModel(
            list.[0],
            list.[1],
        );
    }
}

const yuJin2 = IdolModel.fromObject({       //새로운 아이돌 모델을 반환
    name: "안유진",
    year: 2003,
});
console.log(yuJin2);

const wonYoung = IdolModel.fromList(
    [
        "장원영",
        2003,
    ]
);
console.log(wonYoung);