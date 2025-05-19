import "./DiaryList.css";
import Button from "./Button.jsx";
import DiaryItem from "./DiaryItem.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const DiaryList = ({data}) => {
    const nav = useNavigate();

    // 정렬된 날짜들을 state 에 저장해야하기 때문에 useState을 사
    const [sortType, setSortType] = useState("latest");

    const onChangeSortType= (e) => { // 이벤트 핸들러로 유저의 선택에 따라 달라
        setSortType(e.target.value);
    };

    const getSortedDate = () =>{
        return data.toSorted((a,b) => {
            if (sortType === "oldest"){
                // 오래된 순 정
                return Number(a.createdDate) - Number(b.createdDate);
            }else {
                return Number(b.createdDate) - Number(a.createdDate);
            }
        }); // 새로운 정렬 리스트를 반환, 원본 리스트를 수정하면 안
    };

    const sortedData = getSortedDate();

    return (
       <div className={"DiaryList"}>
        <div className={"menu_bar"}>
            <select onChange={onChangeSortType}>
                <option value={"latest"}>최신순</option>
                <option value={"oldest"}>오래된 순</option>
            </select>
            <Button onClick={() => nav("/new")}
                    text={"새 일기 쓰기"}
                    type={"POSITIVE"}/>
        </div>
         <div className={"list_wrapper"}>
             {sortedData.map((item) =>(
                 <DiaryItem key={item.id} {...item}/>
             ))};
         </div>
       </div>
    )
};
export default DiaryList;