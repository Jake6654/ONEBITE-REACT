import { TodoStateContext } from "../App";
import "./List.css";
import TodoItem from "./TodoItem";
import {useState, useMemo, useContext} from "react";


const List = () => {
    const todos = useContext(TodoStateContext);
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () =>{
        if(search === ""){
            return todos;
        }
        return todos.filter((todo) => // todos 배열에 filter 메서드 실행
             todo.content
             .toLowerCase()
             .includes(search.toLowerCase()));
              // 각 배열의 값에 search(사용자가 찾고자 하는 값을 갖고 있는지) 필터링
              // ex todo.content) "리액트 공부하기" 있다면 ture 을 반환
    }

    const filteredTodos = getFilteredData();


    const {totalCount, doneCount, notDoneCount} = // 구조 분해항당으로 useMemo 을 통해 받은 결과값을 저장
    useMemo(() => {
            const totalCount = todos.length;
            const doneCount = todos.filter(
                (todo) => todo.isDone).length;
            const notDoneCount = totalCount - doneCount;
    
            return {
                totalCount,
                doneCount,
                notDoneCount
            };
    }, [todos]); // deps 에 todos 을 추가함으로써 todos라는 state 의 값이 삭제, 추가, 변경 될때
    // 이 콜백 함수가 다시 실행됨 -> 불필요한 연산을 막아준다
    // 의존성 배열 [] : deps (비어있을때는 초기에 한번만 실행된다)



    return (
    <div className="List">
        <h4>Todo List</h4>
        <div>
            <div> total : {totalCount}</div>
            <div> done : {doneCount}</div>
            <div> notDone : {notDoneCount}</div>
        </div>
        <input 
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요" />
        <div className="todos_wrapper">
            {filteredTodos.map((todo) =>{
                return <TodoItem key={todo.id} {...todo}/>;
            })}
        </div>
    </div>
    );
};

export default List;  