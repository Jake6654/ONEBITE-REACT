import {useParams, useNavigate} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useContext, useEffect, useState} from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App.jsx";
import useDiary from "../hocks/useDiary.jsx";
import useTitle from "../hocks/useTitle.jsx";



const Edit = () => {
    const nav = useNavigate();
    const params = useParams(); // json 형태로 값을 가져옴
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    useTitle(`${params.id}번 일기 수정`);
    const curDiaryItem = useDiary(params.id);

    const onClickDelete = () => {
        // 팝업창을 띄우는 함수
        // 사용자가 확인을 누르면 true 가 반환되고 취소를 누르면 false 가 반환된다.
        if( window.confirm("일기를 다시 삭제할까요? 다시 복구되지 않아요!")) {
            // 일기 삭제 로직
            onDelete(params.id); // useParams 으로 id 를 파라미터로 받기 때문에
            nav('/', {replace:true}) // 리다이렉트, 뒤로가기 막(이벤트 핸들러이기 때문이 이 nav 는 잘 작동함)
        }
    };



    const onSubmit = (input) =>{
        if (window.confirm("일기를 정말 수정할까요?")){
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content)
            nav('/', {replace:true});
        }
    };

    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button onClick={() => nav(-1)} text={"뒤로가기"}/>}
                rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"}/>
                }/>
            <Editor onSubmit={onSubmit} initData ={curDiaryItem}/>

        </div>
    )
}

export default Edit;