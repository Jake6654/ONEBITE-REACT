//1. 상수 객체
const animal= {
    type:"고양이",
    name:"나비",
    color:"black"
}

// 상수 객체 값이나 key을 수정,추가,삭제 할 수 있다.
animal.age = 2; // add
animal.name = "Jake"; // 수정 
delete animal.color; // 삭제


console.log(animal);

// 2. 메서드
// -> 값(value)이 함수인 프로퍼티를 말한다

const person = {
    name:"jake",
    sayHi: () => {
        console.log("hi");
    }

}

person.sayHi();