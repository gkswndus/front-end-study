/**
 * Super and Override
 * Super : 부모 클래스
 * (부모 클래스의 기존 생성자를 그대로 사용하고 싶을 때 사용)
 * Override : 덮어쓰다
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel {
    // 노래 / 춤
    part;

    constructor(name, year, part){                // 생성자를 덮어씌우고 싶으면 생성자를 또 생성
        super(name, year);                        // 부모 클래스를 의미
        this.part = part;
    }

    sayHello(){
        // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`;       //생성자가 아닌 곳에서는 변수에 super가 아닌 this 사용
        return `${super.sayHello()} ${this.part}를 맡고있습니다.`;                     // 중복 지우기
    }
}

const yuJin = new FemaleIdolModel("안유진", 2003, "보컬");
console.log(yuJin);

const wonYoung = new IdolModel("장원영", 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());