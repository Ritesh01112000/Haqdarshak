import React from 'react';
import '../Language.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PersonalDetails = (props) =>{
  const {state,district,pincode,phone} = useParams()
  const [name,setName] = useState()
  const [age,setAge] = useState()
  const [responseData, setResponseData] = useState(null); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [gender, setGender] = useState('');
  const onNameChange =(event)=>{
     setName(event.target.value)
  }
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const onDateChange = (event) =>{
    setAge(event.target.value)
  }
  const onClickHandler = () =>{
   const data ={
    name:name,
    state:state,
    district:district,
    pincode:pincode,
    phone:phone,
    gender:gender,
    age:age
  }
  console.log(data,"data to pass")
  postData(data);
}
  const postData = async (data) => {
    try {
      console.log("inside post Data")
      
      const response = await fetch('http://localhost:4000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
         
        },
        body: JSON.stringify(data),       });

    
        if (response.status === 201) {
          alert('User created');
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
    <p>Personal Details</p>
    </div>
    <div className='whiteBox'>
        <p className='label-txt'>Name</p>
        <div>
        <input className='input-fields' placeholder="Enter Your Name" onChange={onNameChange}/>

      </div>
      
      <p className='label-txt'>Gender</p>
      <br/>
      <div className='gender-fields'>
          <label>
            <input
              type="radio"
              value="male"
              checked={gender === 'male'}
              onChange={handleGenderChange}
            />
             Male
          </label>
        
          <label>
            <input
              type="radio"
              value="female"
              checked={gender === 'female'}
              onChange={handleGenderChange}
            />
             Female
          </label>
          <label>
            <input
              type="radio"
              value="other"
              checked={gender === 'other'}
              onChange={handleGenderChange}
            />
             Other
          </label>
          

      </div>
      <p className='label-txt'> DOB/Age</p>
      <div className='DOB-fields'>
      <input className="input-fields" type="date" onChange={onDateChange}/>
      <p>or</p>
      <input className="input-fields" type="text" placeholder='Age'onChange={onDateChange}/>
      
      </div>
      
        <p className='box-fl-txt'>Proceed without OTP if you live in an area with low network connectivity.</p>
        {/* <Link to="/LoginOptions"><button className='btn-nxt'>NEXT</button></Link> */}
        <button className='btn-nxt' onClick={onClickHandler}>NEXT</button>
    </div>
  </div>
)
}
export default PersonalDetails;