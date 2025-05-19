import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {DiaryDispatchContext} from "../App.jsx";
import useTitle from "../hocks/useTitle.jsx";


const New = () => {
    const nav = useNavigate();
    const {onCreate} = useContext(DiaryDispatchContext)
    useTitle("새 일기 쓰기");


    const onSubmit = (input) => {
        onCreate(input.createdDate.getTime(), input.emotionId, input.content);
        nav("/", {replace:true}) // 작성 완료 후 home page 로 이동후 뒤로가기까지 방지
    };
    return (
        <div>
            <Header title={"새 일기 쓰기"}
                    leftChild={ <Button
                        onClick={()=> nav(-1)}
                         text={"뒤로가기"}/>}/>
            <Editor onSubmit={onSubmit}/>
        </div>
    )
}

export default New;