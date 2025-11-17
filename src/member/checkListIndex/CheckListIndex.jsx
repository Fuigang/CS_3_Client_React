import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PrenatalList from './prenatalList/PrenatalList';
import SymptomList from './symptomList/SymptomList';


//주차별 체크리스트
const CheckListIndex = ()=>{


return(
    <div>
        <PrenatalList />  {/*검진 리스트*/}
        <SymptomList /> {/*증상 리스트*/}
    </div> 
);


}
export default CheckListIndex;