import { useState ,useRef} from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개



//<input> 사용자로부터 인풋을 받는 인풋태그
// placeholder={"이름"} 는 입력착의 회색으로 보이는 약간의 가이드 문구와 같은 것
const Register = () =>{
    
    const [input, setInput] = useState({
        name:"",
        birth:"",
        country:"",
        bio:"",
    });

    const onChange = (e) =>{
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value, // e.target.name 은 
        });

    };

    const onSubmit = () =>{
        if (input.name ===""){
            // 이름이 비어있다면 이름을 입력하느 DOM 요소 포커스
            inputRef.current.focus();
        }
    }

    const countRef = useRef(0);
    const inputRef = useRef();
    

   
    return <div>
     
        <input 
        ref={inputRef}
        name="name"
        value={input.name}
        onChange={onChange}
         placeholder={"이름"}/>

         <div/>
         <div>
         <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"/>
         </div>
        <div>
            <select name="country" value={input.country} onChange={onChange}>
                <option></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="uk">영국</option>
            </select>
        </div>
        
        <div>
            <textarea name="bio" value={input.bio} onChange={onChange} />
        </div>
        <button onClick={onSubmit}>제출</button>
    </div>


}

export default Register;