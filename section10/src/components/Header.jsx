import "./Header.css";
const Header  = ({title, leftChild, rightChild}) => {
    // Header 컴포넌트에는 3개의 부분이 있음 왼쪽 중간 오른쪽
    // 그래서 3개의 div 으로 관리
    return(

        <header className={"Header"}>
            <div className={"header_left"}>{leftChild}</div>
            <div className={"header_center"}>{title}</div>
            <div className={"header_right"}>{rightChild}</div>
        </header>
    );
};

export default Header;
