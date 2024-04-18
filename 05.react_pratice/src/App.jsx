import './App.css'
import Register from './component/Register';

// 함수 하나하나가 컴포넌트이다.
// 컴포넌트는 첫 글자가 대문자여야한다. 
// (대문자가 아니면 컴포넌트로 인정되지 않는다.)
function App() {
return (
  <>
    <Register />
  </>
);
}

export default App
