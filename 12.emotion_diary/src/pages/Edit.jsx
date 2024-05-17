import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Editor from "../../components/Editor";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onUpdate, onDelete} = useContext(DiaryDispatchContext);
    const currDiaryItem = useDiary(params.id);
    usePageTitle(`${params.id} Diary Edit`)

    const onClickDelete = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            onDelete(params.id);
            nav("/", { replace: true });
        } else {
            return;
        }
    };

    const onSubmit = (input) => {
        if (window.confirm("수정할까요?")) {
            onUpdate(
                params.id, 
                input.createdDate.getTime(),
                input.emotionId,
                input.content
            );
            nav("/", { replace: true });
        } else {
            return;
        }
    }

    return (
        <div>
            <Header 
                title={ "일기 수정하기" } 
                leftChild={ 
                    <Button 
                        onClick={() => nav(-1)}
                        text={"< 뒤로 가기"} 
                    /> 
                }
                rightChild={ 
                    <Button 
                        onClick={ onClickDelete }
                        text={"삭제하기"} 
                        type={"NEGATIVE"} 
                    /> 
                }
            />
            <Editor 
                initData={currDiaryItem} 
                onSubmit={ onSubmit }
            />
        </div>
    );
}

export default Edit;