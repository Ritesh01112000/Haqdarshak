import React from 'react';
import '../Flyers//Flyers.css';
import {useNavigate} from 'react-router-dom';

const HomeOne = ()=>{
    const navigate =useNavigate();   
    const onClickHandler=()=>{
      navigate("/secondFlyer");
    }
    return(
        <div className='parent' onClick={onClickHandler}>
            <h2>Welcome to </h2>
            <img src="/flyerLogo.png" height="95.26px" width="184px"/>
            </div>
    )
}

export default HomeOne;