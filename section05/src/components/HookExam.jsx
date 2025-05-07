import {useState} from "react";
// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다
// 3. 나만의 훅(custom hook) 직접 만들 수 있다.


// const state = useState(); 오류발생 무조건 함수 컴포넌트 안에서만 호출되어야함

// 커스텀 Hook
const useInput = () => {
    const[input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };
    
    return [input, onChange];
}



const HookExam = () => {
    const[input, onChange] = useInput();

    // 조건문안에서 호출 불가능
    // if(true) {const state = useState();
    // } 

    return (
    <div>
        <input value={input} onChange={onChange}/>
    </div>
    );
};

export default HookExam;