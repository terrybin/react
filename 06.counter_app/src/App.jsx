import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const onClickBtn = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
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