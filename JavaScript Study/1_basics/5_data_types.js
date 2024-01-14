/**
 * Data Types
 * 
 * 여섯개의 Primitive Type(가장 작은 단위)과
 * 한개의 Object Type이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언 -True/False)
 * 4) undefined (언디파인드 -정의되지 않은)
 * 5) null (널 -정의되지 않은)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *      Function
 *      Array
 *      object 
 */

/**
 * Number 타입
 */
const age = 20;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log("--------------");

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity); // 무한대 값
console.log(typeof nInfinity); // 마이너스 무한대 값
console.log("--------------");

/**
 * String 타입
 */
const codeFactory = '"코드"팩토리'
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유진"
console.log(ive);
console.log(typeof ive);

/**
 * Template Literal (`백틱기호`)
 * 
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고싶다면 두번 입력
 */
const iveYuJin = "아이브\n안유진"
console.log(iveYuJin);
const iveWonYong = "아이브\t장원영"
console.log(iveWonYong);
const backSlash = "아이브\\백슬래시"
console.log(backSlash);
const smallQutoation = "아이브\"코드팩토리";
console.log(smallQutoation);

const iveWonYong2 = `아이브i "' ///// 
장원영`;                                    // 백틱기호를 사용하면 글자, 띄어쓰기 그대로 출력
console.log(iveWonYong2);
console.log(typeof iveWonYong2);

const groupName = "아이브";
console.log(groupName + " 안유진");
console.log(`${groupName} 안유진`)  //`${변수로 인식}`   -백틱기호 안에 변수를 넣고싶은 경우

/**
 * Boolean 타입
 */
const isTrue = true;  //문자, 숫자가 아닌 키워드. 변수 이름으로 사용 불가능
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화(할당)하지 않았을 때
 * 지정되는 기본값이다.
 * 
 * 직접 undefined로 값으로 초기화 하는 건 지양
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때
 * 사용되는 값이다. 
 */
let init = null;
console.log(init);
console.log(typeof init); //object가 출력되는 것은 버그

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용
 * 다른 primitive 값들과 다르게 Symbol 함수를
 * 호출해서 사용
 */
const test1 = 1;
const test2 = 2;
const test3 = 1;

console.log(test1 === test2);
console.log(test1 === test3);

const symbol1 = Symbol(1);  // 반드시 대문자(내장 함수이기 때문)

console.log(symbol1 === symbol2);

/**
 * Object 타입
 * 
 * Map 
 * 키:벨류의 쌍으로 이루어져있다.
 * key:value
 */
const dictionary = {              // 선언할 때 중괄호
    red: "빨간색",
    orange: "주황색",
    yellow: "노란색",
};                                

console.log(dictionary);
console.log(dictionary['red']);   //대괄호에 가져오고 싶은 value 값의 key를 넣어줌
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

/**
 * Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입
 */
const iveMembersArray = [         // 선언할 때 대괄호
    "안유진",   // 0번    
    "가을",     // 1번
    "레이",     // 2번
    "장원영",   // 3번
    "리즈",     // 4번
    "이서",     // 5번
];
console.log(iveMembersArray);

/**
 * index
 * 
 * 0부터 시작
 * 1씩 올라감
 */
console.log(iveMembersArray[0]);   // 가져오고 싶은 값의 순서
console.log(iveMembersArray[5]);

iveMembersArray[0] = "코드팩토리"; // 배열된 값 바꾸기
console.log(iveMembersArray[0]);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할 지 명시
 *                  예) C
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"
 *                  예) JS
 * 왼쪽 변수가 아닌 오른쪽 값에 의해 타입이 결정 
 */