import "./TodoItem.css"

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

export default TodoItem;