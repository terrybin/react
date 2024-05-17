import "./Viewer.css"
import { getEmoji } from "../src/util/get-emotion-image";
import { emotionList } from "../src/util/constants";

const Viewer = ({ emotionId, content }) => {
    const emotionItem = emotionList.find(
        item => String(item.emotionId) === String(emotionId)
    );

    return (
        <div className="Viewer">
            <section className="img_section">
                <h4>Today emotion</h4>
                <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
                    <img src={getEmoji(emotionId)} />
                    <div>{emotionItem.emotionName}</div>
                </div>
            </section>
            <section className="content_section">
                <h4>Today Diary</h4>
                <div className="content_wrapper">
                    <p>{content}</p>
                </div>
            </section>
        </div>
    );
}

export default Viewer;