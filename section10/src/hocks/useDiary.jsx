import {useContext, useState, useEffect} from "react";
import {DiaryStateContext} from "../App.jsx";
import {useNavigate} from "react-router-dom";

// 커스텀 훅, 함수앞에 use 을 붙히면 커스텀 훅이 된
const useDiary = (id) => { // id 을 매개변수로 받기!
    const data = useContext(DiaryStateContext); // 전체 데이터를 부모 컴포넌트에서 받아옴
    const [curDiaryItem, setcurDiaryItem] = useState();
    const nav = useNavigate();

    useEffect(() => {
            // id 가 같은 일기를 반환해주는 함수
            const currentDiaryItem = data.find(
                (item) => String(item.id) === String(id)
            );

            // 예외처리 로직
            if (!currentDiaryItem){
                window.alert("존재하지 않는 일기입니다.")
                nav('/', {replace:true}); // 이 nav 함수가 재대로 작동되지 않음
                // 이유는 이 함수는 컴포넌트가 마운트 되기 전에 호출되기 때문이 -> useEffect 사용!
            }

            return setcurDiaryItem(currentDiaryItem); // state의 값을 저장
        }
    , [id])
    return curDiaryItem;
}
export default useDiary;