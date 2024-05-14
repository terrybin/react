import "./TodoItem.css"
import { memo } from "react";

const TodoItem = ({ 
    id, 
    isDone, 
    content,
    date, 
    onUpdate,
    onDelete 
}) => {
    const onChangeCheckBox = () => {
        onUpdate(id);
    }

    const onDeleteContent = () => {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input 
                onChange={onChangeCheckBox}
                readOnly
                type="checkbox"
                checked={isDone}
            />
            <div className="content">{content}</div>
            <div className="date">
                {new Date(date).toLocaleDateString()}
            </div>
            <button
                onClick={onDeleteContent}
            >삭제</button>
        </div>
    )
}

/*
export default memo(TodoItem, (prevProps, nextProps) => {
    // 반환값에 따라 Props의 변경여부 판단
    // T -> Props 바뀌지 않음 -> 리렌더링 X
    // F -> Props 바뀜 -> 리렌더링 O
    
    if (prevProps.id !== nextProps.id) return false;
    if (prevProps.isDone !== nextProps.isDone) return false;
    if (prevProps.content !== nextProps.content) return false;
    if (prevProps.date !== nextProps.date) return false;

    return true;
});
*/

export default memo(TodoItem);