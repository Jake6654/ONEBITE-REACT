import "./Button.css";
const Button = ({text, type, onClick}) =>{
    // text : represented text in the button
    // type : DEFALUT, POSITIVE, NEGATIVE(delete)
    // 각 버튼 마다 클래스 네임을 동적으로 변경하기 위해 `` 백틱을 사용헤서 type 을 받을 수 있게 설정
    return <button
            onClick={onClick}
            className={`Button Button_${type}`}>
        {text}
    </button>
};

export default Button;