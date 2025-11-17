import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BabyBox from './babyBox/BabyBox';
import BabyArticle from './babyArticle/BabyArticle';
import BabyButton from './babyButton/BabyButton';


//로그인 하면 디폴트 페이지 "/"랑 라우팅 되어있음
const BabyIndex = ()=>{

return(
    <div>
        <BabyBox />
        <BabyArticle />
        <BabyButton />
    </div>
);


}
export default BabyIndex;