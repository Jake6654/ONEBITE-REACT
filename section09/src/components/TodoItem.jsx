import { TodoDispatchContext} from "../App";
import "./TodoItem.css";
import { memo, useContext } from "react";

const TodoItem = ({id, isDone, content, date}) => {

    const {onDelete, onUpdate} = useContext(TodoDispatchContext);

    const onChangeCheckBox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () =>{
        onDelete(id)
    }

    return (
    <div className="TodoItem">
        <input 
        onChange = {onChangeCheckBox}
        checked={isDone} 
        type="checkbox" />
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
    </div>
    )
};

export default memo(TodoItem);
// useCallback 훅을 사용하여 함수 객체를 마운트하는 동안에 생성되고 재생성 되는것을 방지하였기 때문에
// 이제는 memo() 을 사용해도 다른 todo 아이템이 리렌더링 되지 않음

// export default memo(TodoItem, (prevProps, nextProps)=> {
//     // 반환값에 따라, Props 가 바뀌었는지 안 바뀌었는지 판단
//     // T -> Props 바뀌지 않음 -? 리렌더링 X
//     // F -> Props 바뀜 -> 리렌더링 O

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });
// // 하나의 투두 아이템의 상태를 변경할때 App.jsx 부모 컴포넌트에서 onUpdate, onDelete 와 같은
// // 함수 객체를 항상 다시 보내주기 때문에 다른 투두 아이템들도 리랜더링이 된다
// // 따라서 객체 타입을 props 로 받는 컴포넌트는 
