import Header from "../../components/Header";
import Button from "../../components/Button";
import Editor from "../../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
    const { onCreate } = useContext(DiaryDispatchContext);
    const nav = useNavigate();

    const onSubmit = (input) => {
        let content = input.content;
        
        if (content === undefined || content === "") {
            alert("Please write diary"); return;
        }
        
        onCreate(
            input.createdDate.getTime(), 
            input.emotionId, 
            input.content
        );
        nav("/", { replace: true });
    };

    return (
        <div>
            <Header 
                title={"새로운 일기 쓰기"} 
                leftChild={ 
                    <Button onClick={() => nav(-1)} text={"< 뒤로가기"}/> 
                } 
            />
            <Editor onSubmit={ onSubmit } />
        </div>
    )
}

export default New;