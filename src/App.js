import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './notmember/login/Login';
import Signup from './notmember/signup/Signup';
import MainIndex from './notmember/mainIndex/MainIndex';
import ChooseType from "./member/chooseType/ChooseType.jsx";
import useAuthStore from './store/useStore.js';
import { caxios } from './config/config.js';

function App() {
  const { login, isLogin } = useAuthStore((state) => state);
  // 라스트 베이비 시퀀스 및 선택한 아이 저장 상태변수
  const [babySeq, setBabySeq] = useState();
  console.log(babySeq);
  console.log("adsf",isLogin);

  useEffect(() => {
    // 토큰 유지
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("id");
    if (token) {
      login(token, id);
    }
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/login/*' element={<Login setBabySeq={setBabySeq}/>} /> {/*여기서 로그인페이지, 비번찾기, 아이디 찾기 페이지 추가 라우팅됨*/}
          <Route path='/signup/*' element={<Signup />} /> {/*회원가입*/}
          <Route path='/*' element={<MainIndex babySeq={babySeq} />} /> {/*탑바 + 바디있는 곳으로 이동*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
