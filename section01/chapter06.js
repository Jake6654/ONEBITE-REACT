// 1. 묵시적 형 변환 
// 자바스크립트가 자동으로 형 변환을 하는 것

let num1 = 10;
let str = "20";

const result = num1 + str; // 1020 -> 숫자를 자동으로 문자로 형 변환

// 2. 명시적 형 변환
// 프로그래머가 직접 내장함수를 이용해서 직접 형 변환

let str1 = "10";
let str1ToNum = Number(str1); // Number 사용하여 문자 -> 숫자
// 숫자값만 포함하지 않는 문자열을 형 변환할때는 parseInt 사용
let str2 = "10개";
let str2ToNum = parseInt(str2);
console.log(str2ToNum)

// num -> strng
let num2 = 20;
let numToStr = String(num2);

