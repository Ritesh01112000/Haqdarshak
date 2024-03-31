import React from 'react';
import './FlyerTwo.css'
import { useNavigate } from 'react-router-dom';
const Secondflyer =() =>{
    const navigate = useNavigate();
    const onClickHandler=()=>{
      navigate('/Language')
    }
return(
    <div className='box' onClick={onClickHandler}>
        <div className='textLine'>
        <p>Getting <br/> benefits is <br/>now easy!</p>
        </div >
        <div className='bar'></div>
        <div className="imgDiv">
        <img src="/flyertwo.png" width="400px"/>
        </div>

    </div>
)
}
export default Secondflyer;