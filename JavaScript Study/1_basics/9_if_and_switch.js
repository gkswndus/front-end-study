/**
 * If and Switch
 * 괄호 안에는 false나 true 값을 반환해주는 조건문
 */
let number = 5;

if (number % 2 === 0){
    console.log("number 변수는 짝수입니다.")      //true인 경우 출력
}else {
    console.log("number 변수는 홀수입니다.")      //false인 경우 출력
}

console.log("---------------");

if (number % 2 === 0){
    console.log("2의 배수입니다")      
}else if (number % 2 === 0){                       //위 조건문이 false일때 조건문 추가
    console.log("3의 배수입니다")      
}else if (number % 4 === 0){                                
    console.log("4의 배수입니다")  
}else if (number % 5 === 0){                                
    console.log("5의 배수입니다")  
}else{
    console.log("2, 3, 4, 5의 배수가 아닙니다.")   //if, else if 조건에 부합하지 않을 때 출력
}

console.log("---------------");

const englishDay ="monday";

let koreanDay;

switch(englishDay){
    case "monday":
        koreanDay = "월요일";
        break;                                      // 해당되는 값을 찾았으면 케이스문에서 빠져나와라 
        case "Tuesday":
        koreanDay = "화요일";
        break; 
    case "Wednesday":
        koreanDay = "수요일";
        break; 
    case "Thursday":
        koreanDay = "목요일";
        break; 
    case "Friday":
        koreanDay = "금요일";
        break; 
    default:                                        // 케이스문을 제외한 나머지 값일 때
        koreanDay = "주말";  
        break;                                
}

console.log(koreanDay);