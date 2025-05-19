import {useEffect} from "react";

const useTitle = (title) => {
    useEffect(() => { // 처음 마운트 될때만 사용되는 함(사이트의 타이틀을 바꾸는 함수)
        const $title = document.getElementsByTagName("title")[0];
        $title.innerText = title;
    },[title])

}

export default useTitle;