/**
 * Async theory
 */

// //Sync Programming (동기 프로그래밍)
// //Hello -> 잠시후 -> 완료 -> World
// //while 룹을 실행하는 동안(2초) 다른 코드를 실행할 수 없음
// function longwork(){
//     const now = new Date();      //현재 날짜

//     /**
//      * milliseconds since epoch
//      * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
//      * 밀리초로 반환한다.
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;

//     while(new Date().getTime() < afterTwoSeconds){

//     }

//     console.log("완료");
// }

// console.log("Hello");
// longwork();
// console.log("World");


//Async Programming (비동기 프로그래밍)
//Hello -> World -> 잠시후 -> 완료
function longwork(){
    setTimeout(()=>{
        console.log("완료");
    }, 2000);           //2초 후 함수 실행
}

console.log("Hello");
longwork();
console.log("World");
