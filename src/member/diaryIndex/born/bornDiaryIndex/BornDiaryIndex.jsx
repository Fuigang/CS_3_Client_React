import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EverydayNavi from '../everydayNavi/EverydayNavi';
import EverydayDetail from '../everydayDetail/EverydayDetail';
import EverydayWrite from '../everydayWrite/EverydayWrite';




//하루일기 인덱스 "/diary/" 여기까지 라우팅
const BornDiaryIndex = ()=>{


return(

    <div>
        {/*하루일기 좌측 네비바(통계 등 나오는 곳)*/}
        <EverydayNavi />

        {/*하루일기 디테일 or 작성 페이지 라우팅*/}
        <Routes>
            <Route path='' element={ <EverydayDetail />} /> {/*디테일 다이어리*/}
            <Route path='everydaywrite' element={ <EverydayWrite />} /> {/*다이어리 작성*/}
        </Routes>

    </div>
);


}
export default BornDiaryIndex;