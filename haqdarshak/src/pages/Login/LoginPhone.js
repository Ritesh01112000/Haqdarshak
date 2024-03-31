import React from 'react';
import './Language.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPhone = (props) =>{
  const { state, district, pincode } = useParams();
  const [phone,setPhone] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const onPhoneChange =(event)=>{
    setPhone(event.target.value)
 
  }

  const onClickHandler = () =>{
    const data ={
    phone:phone,
    }
   console.log(data,"data to pass")
   LoginData(data);
 }
   const LoginData = async (data) => {
     try {
       console.log("inside post Data")
       
       const response = await fetch('http://localhost:4000/user/login', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json', 
          
         },
         body: JSON.stringify(data),       });
 
     
         if (response.status === 200) {
           alert('User Logged In');
           navigate("/HomeOne")
       }
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
 
     
     } catch (error) {
     
       setError(error.message);
     }
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
        <button className='btn-nxt' onClick={onClickHandler}>NEXT</button>
    </div>
  </div>
)
}
export default LoginPhone;