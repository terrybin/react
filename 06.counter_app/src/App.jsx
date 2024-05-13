import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);
  
  const onClickBtn = (value) => {
    setCount(count + value);
  }

  // 1. 마운트: 탄생
  useEffect(() => {
    console.log("mount");
  }, [])

  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update")
  })

  // 3. 언마운트: 죽음

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input 
          value={input} onChange={(e) => {
            setInput(e.target.value);
          }} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickBtn={onClickBtn} />
      </section>
    </div>
    )
}

export default App;


/**
 * React는 계층구조로 봤을 때 부모가 자식한테 props 를 주는 형태로 서로의 값을 동기화 할 수 있다.
 * 동일 계층간의 데이터 공유는 불가능하다.
 */