function Button ({children, text, color="black"}){ 
    // 여기서 e 는 합성 이벤트 객체
    // 여러 브라우저에서 이벤트 객체를 하나로 통일한 형태이다(통일된 규칙)
    const onClickButton = (e) => {
        console.log(e); 
        console.log(text);

    };

    // 구조 분해 할당 방식으로 props 에 기본값을 설정할 수 있다.
    console.log(text);
    return (<button
        onClick={onClickButton}
        //onMouseEnter ={onClickButton}
    style={{color: color}}>
         {text} - {color} 
         {children}</button>
        
    );
};

export default Button;