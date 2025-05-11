import "./List.css";
import TodoItem from "./TodoItem";
import {useState} from "react";


const List = ({todos, onUpdate, onDelete}) => {
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


    return (
    <div>
        <h4>Todo List🌱</h4>
        <input 
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요" />
        <div className="todos_wrapper">
            {filteredTodos.map((todo) =>{
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
            })}
        </div>
    </div>
    );
};

export default List;  