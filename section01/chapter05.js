// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let minf= -Infinity;

let nan = NaN; // 연산에 실패했을때 반환되는 변수

// 2. String Type 
let myName = "장재혁";
let myLocation = "Virginia";
let introduce = myName + myLocation; // 문자열 덧셈이 가능

// 백틱을 사용하면 변수의 이름을 동적으로 사용할 수 있다.
// 이러한 문법을 템플릿 리터럴 문법이라고 한다
let introduceText = `제이름은 ${myName} ${myLocation} 에 살고 있습니다.`

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type -> 직접 개발자가 할당해줘야함
let empty = null;

// 5. Undefined Type
// Undefined 을 변수의 값을 초기화하지 않았을때 발생
let none;