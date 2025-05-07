import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import {useState, useEffect, useRef} from "react";
import Even from './components/Even';

function App() {
  const[count, setCount] =  useState(0);
  const[input, setInput] = useState("");
  const isMount = useRef(false); //reference 객체

 // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []) // 마운트 하는 시점에 사용하고 싶은 함수나 동작이 있다면 빈 배열을 넘기면 됨

 // 2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{
    // 이런식으로 설정해놓으면 초기 mount 할때 이 함수의 로직이 발생하는것을 방지한다
    if(!isMount.current){
      isMount.current =true;
      return;
    }
    console.log("upadate")
  }) // deps(배열) 를 전달하지 않으면 리렌더링 될때마다 이 함수가 실행됨 
 // 3. 언마운트 : 죽음


  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className='App'>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value);
        }}
        />
      </section>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
    
  )
}

export default App
