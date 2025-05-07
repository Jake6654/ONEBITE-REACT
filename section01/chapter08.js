// 1. null 병합 연산자 ??
// 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 20;
let var3 = 30;

let var4 = var1 ?? var2; // var1 이 undifined 이기 때문에 var 4 의 값이 
// var 2의 값 20 으로 할당됨
let var5 = var2 ?? var3;
// 둘다 null 이 아닐경우는 앞에온 변수의 값을 가져감

let username = "장재혁";
let userNickName = "Jake";

let displayName = username ?? userNickName;
console.log(displayName);

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;