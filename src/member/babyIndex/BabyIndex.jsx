import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BabyBox from './babyBox/BabyBox';
import BabyArticle from './babyArticle/BabyArticle';
import BabyButton from './babyButton/BabyButton';
import useAuthStore from '../../store/useStore';


//로그인 하면 디폴트 페이지 "/"랑 라우팅 되어있음
const BabyIndex = () => {
    const isLogin = useAuthStore((state) => state.isLogin);
    if (!isLogin) return;

    return (
        <div>
            <BabyBox />{/* 애기정보 및 사진 */}
            <BabyArticle />{/* 기사 및 지원 정보 출력 */}
            <BabyButton />{/* 기능 버튼 */}
        </div>
    );


}
export default BabyIndex;