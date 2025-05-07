function funcA(){ // 함수 선언문을 사용하여 함수 생성
    console.log("funcA");
}

let varA = funcA; // 함수를 변수에 담아 놓을 수 있다.


// 함수 표현식(익명 함수) -> 변수에 함수를 바로 할당하는 방식
let varB = function(){
    console.log("funcB");
}



// 2. 화살표 함수(자바의 람다 느낌)
let varC = (value) => {
    console.log(value);
    return value +1;
    
}

// varC() 괄호를 무조건 해줘야함
// 괄호안에는 매개변수가 들어감
console.log(varC(10))


