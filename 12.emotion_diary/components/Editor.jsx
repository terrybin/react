import "./Editor.css"
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
    {
        emotionId: 1,
        emotionName: "Very Good"
    },
    {
        emotionId: 2,
        emotionName: "Good"
    },
    {
        emotionId: 3,
        emotionName: "Normal"
    },
    {
        emotionId: 4,
        emotionName: "Bad"
    },
    {
        emotionId: 5,
        emotionName: "Very Bad"
    }
];

const getStringDate = targetDate => {
    // Date -> YYYY-MM-DD
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if (month < 10) {
        month = `0${month}`
    }
    if (date < 10) {
        date = `0${date}`
    }

    return `${year}-${month}-${date}`
}

const Editor = ({ onSubmit }) => {
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: ""
    });
    
    const nav = useNavigate();

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        if (name === "createdDate") {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name] : value
        });
    };

    const onClickSubmitButton = () => {
        onSubmit(input);
    };

    

    return (
        <div className="Editor">
            <section className="date_section">
                <h4>Today Date</h4>
                <input 
                    name="createdDate"
                    onChange={ onChangeInput }
                    value={ getStringDate(input.createdDate) } 
                    type="date" 
                />
            </section>
            <section className="emotion_section">
                <h4>Today Emotion</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map(item => (
                            <EmotionItem
                                onClick={() => {
                                  onChangeInput({
                                    target: {
                                        name: "emotionId",
                                        value: item.emotionId
                                    }
                                  })  
                                }} 
                                key={item.emotionId} 
                                {...item} 
                                isSelected={item.emotionId === input.emotionId} 
                            />
                        )
                    )}
                </div>
            </section>
            <section className="content_section">
                <h4>Today Diary</h4>
                <textarea 
                    name="content"
                    value={ input.content }
                    onChange={ onChangeInput }
                    placeholder="How was yor today?">
                </textarea>
            </section>
            <section className="button_section">
                <Button 
                    onClick={ () => nav(-1) }
                    text={ "Cancel" } 
                />
                <Button 
                    onClick={ onClickSubmitButton }
                    text={ "Complete" } 
                    type={ "POSITIVE" } 
                />
            </section>
        </div>
    )
}

export default Editor;