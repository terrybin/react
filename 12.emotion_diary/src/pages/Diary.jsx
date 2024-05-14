import { useParams } from "react-router-dom";
// useParams
//  - Url 파라미터 형태의 파라미터를 가져옴

const Diary = () => {
    const params = useParams();
    console.log(params);

    return <div>No.{params.id} Diary</div>
}

export default Diary;