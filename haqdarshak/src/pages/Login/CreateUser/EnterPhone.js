import React from 'react';
import '../Language.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ChoosePhone = (props) =>{
  const { state, district, pincode } = useParams();
  const [phone,setPhone] = useState();
  const onPhoneChange =(event)=>{
    setPhone(event.target.value)
  }

return(
  <div>
    <div className='textbox'>
      <button className='btn-lng'>arrow</button>
    <p>What is your<br/>mobile number?</p>
    </div>
    <div className='whiteBox'>
        <div >
        
         <input className='input-fields' placeholder="Enter Phone Number" onChange={onPhoneChange}/>
      </div>
     
        <p className='box-fl-txt'>This is used to create an account in your name on the Haqdarshak app.</p>
        <Link to={`/OtpOption/${state}/${district}/${pincode}/${phone}`}><button className='btn-nxt'>NEXT</button></Link>
    </div>
  </div>
)
}
export default ChoosePhone;