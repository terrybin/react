import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [currDiaryItem, setCurrDiaryItem] = useState();
    const nav = useNavigate();

    useEffect(() => {
        const currentDiaryItem = data.find(
            item => String(item.id) === String(id)
        );
        
        if (!currentDiaryItem) {
            window.alert("Id Not Found");
            nav("/", { replace: true });
        }

        setCurrDiaryItem(currentDiaryItem);
    }, [id, data])

    return currDiaryItem;
};

export default useDiary;