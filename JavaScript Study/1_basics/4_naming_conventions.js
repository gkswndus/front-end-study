/**
 * Naming Conventions
 * 변수 이름 지을 때 반드시 지켜야 할 사항
 * 1) 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자를 모두 사용할 수 있다.
 * 2) 특수기호는 언더스코어와 달러만 사용할 수 있다.
 * 3) 숫자로 이름을 시작할 수 없다.
 *          1Name, 2Hello
 * 4) 키워드는 변수명으로 사용할 수 없다.
 *          var const = 'var';
 */
let codeFactory = "코드팩토리";
var $ive = "아이브";
const _yuJin = "안유진";

console.log(codeFactory);
console.log($ive);
console.log(_yuJin);

// let 1name = 'no';
// let const = "attention"; 

/**
 * Naming Conventions 2
 * 
 * 1) camelCase -> 대부분의 언어에서 사용 
 * 첫번째 글자는 소문자, 띄어쓰기한 뒤 다음 글자는 대문자로 시작
 * 2) snake_case -> 파일 이름 또는 파이썬 같은 언어에서 사용 
 * 소문자로 모두 사용하고, 띄어쓰기는 언더스코어
 * 3) PascalCase ->  C# 마이크로소프트 계열의 언어에서 사용
 * 첫번째 글자와 두번째도 대문자로 시작
 */
// 안유진
const anYuJin = "안유진";
console.log(anYuJin);