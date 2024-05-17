import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Viewer from "../../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringDate } from "../util/get-string-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
    const params = useParams();
    const nav = useNavigate();
    usePageTitle(`${params.id} Diary`)

    const currDiaryItem = useDiary(params.id);
    if (!currDiaryItem) {
        return <div>Data Loading...</div>
    }

    const { createdDate, emotionId, content } = currDiaryItem;
    const title = getStringDate(new Date(createdDate));

    return (
        <div>
            <Header 
                title={`${title} 기록`} 
                leftChild={ 
                    <Button 
                        onClick={() => nav(-1)}
                        text={"< 뒤로 가기"} 
                    /> 
                }
                rightChild={ 
                    <Button 
                        onClick={() => { nav(`/edit/${params.id}`) }}
                        text={"수정하기"} 
                    /> 
                }
            />
            <Viewer 
                emotionId={emotionId}
                content={content}
            />
        </div>
    )
}

export default Diary;