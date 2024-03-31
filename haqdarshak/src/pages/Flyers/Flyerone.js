import React from 'react';
import './Flyers.css';
import {useNavigate} from 'react-router-dom';

const Flyerone = ()=>{
    const navigate =useNavigate();   
    const onClickHandler=()=>{
      navigate("/secondFlyer");
    }
    return(
        <div className='parent' onClick={onClickHandler}>
            <img src="/flyerLogo.png" height="95.26px" width="184px"/>
            </div>
    )
}
export default Flyerone;