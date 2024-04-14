import './App.css'
import Header from "./component/Header.jsx"
import Main from "./component/Main.jsx"
import Footer from "./component/Footer.jsx"

// 함수 하나하나가 컴포넌트이다.
// 컴포넌트는 첫 글자가 대문자여야한다. 
// (대문자가 아니면 컴포넌트로 인정되지 않는다.)
function App() {

  return (
    <>
      {/* 
        App 컴포넌트는 부모 컴포넌트이고 Header 컴포넌트는 App 안에 존재하는 
        다른 컴포넌트이므로 자식 컴포넌트로 본다.
       */}
      <Header /> 
      <Main />
      <Footer />
    </>
  );
}

export default App
