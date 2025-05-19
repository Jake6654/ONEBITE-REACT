export const getStringedDate = (targetDate) => {
    // Date 객체 의 저장된 날짜값을 -> YYYY-MM-DD 로 변환해주는 함수
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() +1;
    let date = targetDate.getDate();

    if (month < 10){ // 2자리를 만족시켜야 하기 때문에 이런 예외처리가 필요
        month = `0${month}`;
    }
    if (date < 10){
        date = `0${date}`;
    }

    return `${year}-${month}-${date}`;

};