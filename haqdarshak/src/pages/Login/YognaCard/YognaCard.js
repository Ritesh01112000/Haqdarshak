import React from 'react' ;
import './YognaCard.css'
import { Link } from 'react-router-dom';

const YognaCard = () =>{
    return(
        <div className='FirstDiv'>
             <h3>Scan QR from Yojana </h3>
            
             <h3>Card to login</h3>
             <img src="/qrcode.png" height="150.26px" width="184px"/>
             <div className='whiteBox1'>
                <h3>OR</h3>
                <Link to="/LoginPhone"><button className='btn-nxt'>NEXT</button></Link>
             </div>
        </div>

    )

    
}
export default YognaCard;