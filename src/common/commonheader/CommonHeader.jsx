import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//로그인 여부에 따라 헤더 보이는것 조절 필요
const CommonHeader = ()=>{
return(
    <div>
        로그인 안되어 있으면 : 회원가입 버튼, 로그인버튼, 보드게시판으로 가는 버튼 (onclick시에 "/board" 로 이동해주세요)

        로그인 되어 있으면 : 보드게시판으로 가는 버튼 (onclick시에 "/board" 로 이동해주세요), 엄마마이페이지로 가는 버튼 (onclick시에 "")
    </div>
);


}
export default CommonHeader;
