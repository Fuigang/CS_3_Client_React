import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TotalChart from './totalChart/TotalChart';
import DetailChart from './detailChart/DetailChart';
import ChartInput from './chartInput/ChartInput';



//차트 인덱스 "/chart/" 여기까지 라우팅
const ChartIndex = ()=>{


return(
    <div>
        차트쪽
        <div>{/*여기서 어떤 버튼 누를건지 버튼 만들어 놓기*/}</div>
        
            <div>
                <Routes>
                {/*여기서 어떤 차트 부를지 라우팅해놓음*/}
                    <Route path='' element={ <TotalChart />} /> {/*총 차트*/}
                    <Route path='detail' element={ <DetailChart />} /> {/*디테일 차트*/}
                </Routes>        
            </div>


            {/*여기서 인풋컴포넌트 가져오기*/}
            <div>
                <ChartInput /> {/*차트 input*/}
            </div>
        
    </div> 
);


}
export default ChartIndex;