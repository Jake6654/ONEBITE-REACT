import './App.css';
import List from './components/List';
import Editor from './components/Editor';
import Header from './components/Header';
import {useRef, useReducer, useCallback, createContext, useMemo} from "react";

const mockData = [ // 이런 고정된 mock data 는 컴포넌트 안에 있을 필요가 없으니 밖에다 설정
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },

  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },

  {
    id: 2,
    isDone: false,
    content: "운동하기",
    date: new Date().getTime(),
  }
]

function reducer(state, action){
    switch(action.type){
      case "CREATE":
        return [action.data,...state] // action.data 을 추가 기존 데이터는 spread 연산자로 놔둠
      case "UPDATE":
        return state.map((item) =>
          item.id === action.targetId
        ? {...item, isDone: !item.isDone} // targetId 가 있다면  item.isDone 을 ! 반전 시켜주기
        : item
      )
      case "DELETE":
        return state.filter(
          (item) => item.id !== action.targetId);
        // todos 에서 item id 가 action.targetId 아닌 것만 필터해서 새로운 투두 반환
      default:
        return state;
      }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {

  const [todos, dispatch] = useReducer(reducer, mockData) // 초기값을 mockData 로 전달
  const idRef =useRef(3); // id reference 객체 mock data 가 있기에 3부터 시작

  const onCreate = useCallback((content) => {  // input 입력받은 값으로 Todo 추가하기
    dispatch({
      type:"CREATE",
      data:{
        id : idRef.current++,
        isDone: false,
        content : content,
        date: new Date().getTime(),
      }
    });

    // state 변수인 todos 는 무조건 setTodos 으로 값을 설정 변경해야함
}, [])


const onUpdate = useCallback((targetId) => {
  // todos State의 값들 중에
  // targetId 와 일치하는 id를 갖는 투두 아이템의 isDone 변경
  dispatch({
    type:"UPDATE",
    targetId : targetId
  });
}, []);

  const onDelete = useCallback((targetId) => { // 함수 재생성을 방지하기 위한 useCallback 사용
    // 처음에 마운트 되었을대만 생성됨 (deps가 빈 배열이기 때문에)
    // 인수: todos 배열에서 targetId와 일치하는 id 를 갖는 요소만 삭제한 새로운 배열
       dispatch({
        type:"DELETE",
        targetId : targetId
       });
  },[])

  const memoizedDispatch = useMemo(() => { // useMemo 를 사용해 함수가 컴포넌트가 리렌더링
    // 될때 마다 재성성 되는것을 막는다
    return {onCreate, onDelete, onUpdate }
  }, []);

  return (
    <div className='App'>

    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={memoizedDispatch}>
      <Editor/>
      <List/>
      </TodoDispatchContext.Provider>
       <Header/>
   </TodoStateContext.Provider>
    </div>

  );
}


export default App
