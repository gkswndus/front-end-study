/**
 * Callback
 * 특정 시간이 지나고 다시 불리는 함수
 */
// function waitAndRun(){
//     setTimeout(
//         () => {
//             console.log("끝");
//         }, 2000);
// }

// waitAndRun();

// console.log("--------------");

// function waitAndRun2(){                             //읽기 어렵다는 단점
//     setTimeout(
//         () => {
//             console.log("1번 콜백 끝");
//             setTimeout(() => {
//                 console.log("2번 콜백 끝");
//                 setTimeout(() => {
//                     console.log("3번 콜백 끝");
//                 }, 2000);
//             }, 2000);
//         }, 2000);
// }

// waitAndRun2();

// console.log("--------------");

/**
 * Promise
 * 콜백헬 단점 극복
 * 파라미터 순서 중요
 * reslove값이 출력.
 * 에러가 난 경우 reject가 출력
 */
const timeoutPromise = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove("완료");
    }, 2000);
});

timeoutPromise.then((res) => {                   //then(그러고난 다음에) reslove 값이 res로 들어가게됨. 
    console.log("---then---");              
    console.log(res);                           //reslove가 실행되는 시점에서 반환값을 받을 수 있음
});           

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // if(xxx){
        //     resolve("성공");
        // }else{
        //     reject("에러");
        // }
        resolve("에러");
    }, seconds * 1000);
});

// getPromise(3)
//     .then((res) => {
//         console.log("---first then---");
//         console.log(res);

//         return getPromise(3);
//     })
//     .catch((res) => {
//         console.log("---first catch---");
//         console.log(res);
//     })
//     .finally(() => {
//         console.log("---finally---");
//     });

Promise.all([                   //동시에 부를 경우 가장 느린 함수 기준으로 then 또는 catch가 불린다
    getPromise(1),
    getPromise(4),
    getPromise(1),
])
.then((res) => {
    console.log(res);
});
    