import { useSearchParams } from "react-router-dom";
// useSearchParams
//  - 쿼리 스트링 형태의 파라미터를 가져옴

const Home = () => {
    const [params, setParams] = useSearchParams();
    return <div>Home</div>
}

export default Home;