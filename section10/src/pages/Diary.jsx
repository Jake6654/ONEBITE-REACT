import {useParams, useNavigate} from "react-router-dom"; // url parameter 을 가져오는 훅
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";
import useDiary from "../hocks/useDiary.jsx";
import {getStringedDate} from "../util/get-stringed-date.js";
import useTitle from "../hocks/useTitle.jsx";

const Diary = () => {
    const params = useParams();
    const nav = useNavigate()

    const curDiaryItem = useDiary(params.id)
    useTitle(`${params.id}번 일기`)


    if (!curDiaryItem){
        return <div>데이터 로딩중...!</div>
    }

    const {createdDate, emotionId, content} = curDiaryItem; // 구조 분해 할당은로 데이터를 받
    const title = getStringedDate(new Date(createdDate))

    return (
        <div>
            <Header title={`${title} 기록`}
            leftChild={<Button onClick={() => nav(-1)} text={"<뒤로 가기"}/>}
            rightChild={<Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"}/>}/>

            <Viewer emotionId={emotionId} content={content}/>
        </div>
    )

}

export default Diary;