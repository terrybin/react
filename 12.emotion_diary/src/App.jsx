import './App.css'
import { useReducer, useRef } from 'react';
import New from './pages/New';
import Diary from './pages/Diary';
import Home from './pages/Home';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용"
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용"
  }
]

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": 
      return [action.data, ...state]
    default: 
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    });
  };

  // 일기 수정
  const onUpdate = (id, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        emotionId,
        content
      }
    })
  }

  // 일기 삭제
  const onDelete = id => {
    dispatch({
      type: "DELETE",
      data: id
    })
  }

  return (
    <>
      <button 
        onClick={() => {
          onCreate(new Date().getTime(), 1, "Hello");
        }}
      >
        일기추가하기
      </button>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/new" element={ <New /> } />
        <Route path="/diary/:id" element={ <Diary /> } />
        <Route path="/edit/:id" element={ <Edit /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;