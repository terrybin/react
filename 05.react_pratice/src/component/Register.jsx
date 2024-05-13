import { useState, useRef } from "react";

/*
    useRef와 useState의 차이
    - useRef는 어떤 경우에도 리렌더링을 유발하지 않는다.
    - useState는 값이 변경되면 리렌더링 한다.
*/

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });
    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        if (input.name === "") {
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange} 
                    placeholder={"이름"}/>
            </div>

            <div>
                <input 
                    name="birth"
                    value={input.birth}
                    type="date"
                    onChange={onChange}/>
            </div>

            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option>선택</option>
                    <option value="kr">한국</option>
                    <option value="usa">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} />
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    );
}

export default Register;