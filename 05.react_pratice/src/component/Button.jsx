// props의 자식태그들은 children으로 들어온다.
const Button = ({text, color, children}) => {
    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }

    return (
        <button 
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
            style={{ color: color }}
        >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
}

Button.defaultProps = {
    color: "black"
}

export default Button;