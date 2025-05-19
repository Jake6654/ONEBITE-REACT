import {useState, useContext} from "react";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";
import {DiaryStateContext} from "../App.jsx";


const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date( // 현재 pivotDate 기준 년과 달의 시작 일 1일 0시 0분 0초 로 시작타임을 설정
        pivotDate.getFullYear(),
        pivotDate.getMonth(), 1, 0, 0, 0).getTime(); // data에 있는 객체들과 비교하기 위해
                                             // getTime 메서드를 통해 타임 스탬프로 저장

    // 엔드 날짜는 날짜를 0 으로 설정하여 그 전달을 마지막 날로 돌아감 대신 월은 +1 을 해줘야
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1, 0, 23, 59, 59).getTime();

    return data.filter((item) => // 이번달  안에 있는 모든 데이터를 필터링후 값 전달
        beginTime <= item.createdDate && item.createdDate <= endTime);
};
const Home = () => {

    const data = useContext(DiaryStateContext); // DiaryStateContext 으로 데이터를 가져온
    const [pivotDate, setPivotDate] = useState(new Date());
    // 자바스크립트 월은 -1 이 되기 때문에 +1 을 해줘야한다

    const monthlyData = getMonthlyData(pivotDate, data); // 필터링 함수
    console.log(monthlyData);

    // 왼쪽 버튼을 누르면 1달 전, 오른쪽은ㄴ 한달 후 로 넘어가는 로직을 구현
    const onIncreaseMonth = () =>{
        // setPivotDate 으로 existing pivotDate 객체를 업데이트 해
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1))
    };
    const onDecreaseMonth = () =>{

        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    };


    return (
        <div>
            <Header
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() +1}월`}
                leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>}
                rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}
                />
            <DiaryList data={monthlyData} />
        </div>

    )
}

export default Home;