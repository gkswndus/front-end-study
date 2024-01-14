/**
 * Async / Await
 * await는 promise 함수에만 사용 가능
 */
const getPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("에러");
    }, seconds * 1000)
});

async function runner(){
    try{
        const result1 = await getPromise(1);        // 비동기 프로그래밍처럼 작동
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result3);
    }catch(e){
        console.log('---catch e---');
        console.log(e);
    }finally{
        console.log('---finally---');
    }
}

runner();