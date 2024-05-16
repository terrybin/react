import "./EmotionItem.css"
import { getEmoji } from "../src/util/get-emotion-image";

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
    return (
        <div 
            onClick={ onClick }
            className={`EmotionItem ${
                isSelected ? `EmotionItem_on_${emotionId}` : ""
        }`}>
            <img
                className="emotion_img" 
                src={getEmoji(emotionId)} />
            <div className="emotion_name">{emotionName}</div>
        </div>
    )
};

export default EmotionItem;