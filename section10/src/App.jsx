import './App.css'
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import Notfound from "./pages/Notfound.jsx";
import Edit from "./pages/Edit.jsx";
import {useReducer, useRef, createContext, useEffect, useState} from "react";

function reducer(state, action){ // 매개 변수로 액션 객체를 전달받
  let nextState;

  switch (action.type){
    case "INIT":
      return action.data; // 액션 객체의 값을 그대로 사용하도록 설
    case "CREATE":
      nextState = [action.data,...state]; // 액션 객체의 데이터를 원본 데이터에 추가
      break;
    case "UPDATE":
      nextState =state.map((item) =>
        String(item.id) === String(action.data.id) // 혹시 모를 오류를 위한 String 으로 형 변환
        ? action.data  : item); // 필터링 후 그 item(state 안에 있는) 을 수정후 리렌더링 없으면 그냥 리렌더링
      break;
    case "DELETE":
      nextState = state.filter((item) => String(item.id) !== String(action.data.id)); // 액션 데이터와  같은 아이디를 가진 아이템을 제거
      break;
    default:
      return state
  }
  // local storage 에 diary data 을 저장 (변화가 생길때마)
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState
}
// 컨텍스트를 통해 모든 컴포넌트가 공급받아서 이용할 수 있도록 데이터 공급을 설장
export const DiaryStateContext  = createContext(); // 가변 컨텍스트 data(list)
export const DiaryDispatchContext = createContext(); // 고정 컨텍스트 functions
function App() {
    const [isLoading, setIsLoading] = useState(true);

    // data state 가 변경/추가/삭제 될때 마다 localData storage 저장해야한
    const [data, dispatch] = useReducer(reducer, [])
    const idRef = useRef(1)

    useEffect(() => {
      const storedData = localStorage.getItem("diary");
      if(!storedData){
        setIsLoading(false);
        return;
      }
      const parasedData = JSON.parse(storedData);

      if(!Array.isArray(parasedData)){
        setIsLoading(false);
        return;
      }

      let maxId = 0;
      parasedData.forEach((item) =>{
        if (Number(item.id) > maxId){ // 스트링 형태로 반환하기 때문에 형변환 필요!
          maxId = Number(item.id)
        }
      });

      idRef.current = maxId + 1;

      dispatch({
        type:"INIT",
        data:parasedData,
      });
      setIsLoading(false);
    },[]); // 빈 배열일때는 처음 마운트 할때만 발동이


   // localStorage.setItem('test','hello'); // key: value 값으로 갑을 저

    // 새로운 일기 추가
    // 이 함수가 실행되면 dispatch 함수가 실행되어 액션을 reducer 에 전달
    // reducer 에서는 action type에 따라 이 데이터를 state 에서 어떻게 할지 결정
    // reducer 가 새로운 state 을 생성해서 컴포넌트를 리렌더링 시킨
	 const onCreate = (createdDate, emotionId, content) => {
      dispatch({
          type:"CREATE",
          data: {
            id: idRef.current++,
            createdDate,
            emotionId,
            content,
          },
        }
      );

    }
    // 기존 일기 수정
    const onUpdate = (id, createdDate, emotionId, content) => {
      dispatch({
        type:"UPDATE",
        data: {
          id,
          createdDate,
          emotionId,
          content,
        },
      });
    }

    // 기존 일기 삭제
    const onDelete = (id) => {
      dispatch({
        type:"DELETE",
        data: {
          id,
        }
      });
    };

    if(isLoading){
      return <div>데이터가 로딩중입니다 ...ㅠ.</div>
    }

  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onDelete,
          onUpdate
        }}>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/new"} element={<New />}/>
        <Route path={"/diary/:id"} element={<Diary />}/>
        <Route path={"*"} element={<Notfound />}/>
        <Route path={"/edit/:id"} element={<Edit />}/>
      </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>


    </>
  )
}

export default App
