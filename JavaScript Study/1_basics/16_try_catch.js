/**
 * try...catch
 * 에러를 잡을 때 사용
 * 
 * 1) 발생시킬 때 -> 던진다고 한다. (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다고 한다. (catch)
 */
function runner(){
    try{                                                    // try 안에 오류를 잡을 코드를 넣음
        console.log("Hello");

        throw new Error("큰 문제가 생겼습니다!");               
    
        console.log("코드팩토리"); 
    } catch(e){                                              // 에러를 잡으면 바로 catch문 실행
        console.log("----catch----");                      
        console.log(e);                                     // 실제로 잡은 에러의 내용을 표시
    } finally {                                             // try에서 에러가 났든 안났든(캐치문으로 가든 안가든) 무조건 실행
        console.log("----finally----");                     // 써도 되고 안써도 되는 옵션
    }
}
runner();