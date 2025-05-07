// 1. 콜백함수
function main(value){
    console.log(value);
}

function sub(){ // 이때 매개변수로 전달되는 함수를 콜백함수라고 함
    console.log("i am sub");
}

main(sub) // 함수에 매개변수로 함수를 전달할 수 있다

// 2. 콜백함수의 활용
function repeat(count, callback){
    for(let idx =1; idx <= count; idx++){
        callback(idx);
    }
}

repeat(5, (idx) =>{
    console.log(idx);
});

repeat(5, (idx) =>{ // 2의 배수
    console.log(idx *2);
});