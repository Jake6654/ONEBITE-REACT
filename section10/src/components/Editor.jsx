import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button.jsx";
import {useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {emotionList} from "../util/constants.js";
import {getStringedDate} from "../util/get-stringed-date.js";


const Editor = ({onSubmit, initData}) => {
    // Editor 에는 4가지 섹션이 존재 오늘의 날짜, 오늘의 감정, 오늘의 일기, 버튼
    // 따라서 최상위 태그 아래 4개의 div tag 사용

    // 새 일기를 저장할 수 있는 State 가 필요함으로 새 state 을 만들어준다
    const [input, setInput] = useState({
        createdDate: new Date(), // 생성된 날짜
        emotionId: 3, // 감점표현 아이디
        content:"", // 일기 내
    });

    const nav = useNavigate(); // 취소하기 눌렀을때 뒤로가기 클

    useEffect(()=> {
        if(initData){ // if exists data from edit component
            setInput({
                ...initData,
                createdDate: new Date(Number(initData.createdDate)),// createdDate 만 객체 형태로 바꿔서 넘겨주기
                // 부모컴포넌트에서는 timestamp 형태로 사용하고 있음(변경 필요)
            })
        }
    }, [initData])


    const onChangeInput = (e) =>{
        console.log(e.target.name); // 어떤 요소에 입력이 들어온건지
        console.log(e.target.value); // 입력된 값이 무엇인지?

        // 이 때 이 값은 문자열로 들어오기 때문에 날짜 객체로 바꿔줘야함
        let name = e.target.name;
        let value = e.target.value;

        if (name === "createdDate"){ // 바꿔주는 로
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value,
        })

    }
    const onClickSubmitButton = () => {
        onSubmit(input);
    }




    return(
        <div className={"Editor"}>
            <div className={"date_section"}>
                <h4>오늘의 날짜</h4>
                <input
                    name={"createdDate"}
                    onChange={onChangeInput}
                    value={getStringedDate(input.createdDate)}
                    type={"date"}/>
            </div>
            <div className={"emotion_section"}>
                <h4>오늘의 감정</h4>
                <div className={"emtion_list_wrapper"}>
                    {emotionList.map((item) => (<EmotionItem
                    onClick={() => onChangeInput({
                        target : {
                            name: "emotionId",
                            value: item.emotionId,
                        },
                    })
                    }
                    key={item.emotionId}{...item}
                    isSelected ={item.emotionId === input.emotionId}/>))}
                </div>
            </div>
            <div className={"content_section"}>
                <h4>오늘의 일기</h4>
                <textarea
                    name={"content"}
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder={"오늘의 하루는 어땠나요?"}/>
            </div>
            <div className={"button_section"}>
                <Button onClick={() => nav(-1)} text={"취소하기"}/>
                <Button
                    onClick={onClickSubmitButton}
                    text={"작성완료"} type={"POSITIVE"}/>

            </div>
        </div>
    )
}

export default Editor;