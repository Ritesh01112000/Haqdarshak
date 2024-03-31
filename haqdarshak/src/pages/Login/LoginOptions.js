import React from 'react';
import './Language.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
const LoginOptions = () =>{
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
return(
  <div>
    <div className='textbox'>
      <button className='btn-lng'>arrow</button>
    <p>How do you want <br/>to login?</p>
    </div>
    <div className='whiteBox'>
        <div className='boxfields'>
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
            />
              Register me as a new user
      </label>
      </div>
      <div className='boxfields'>
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
            />
              Use my Phone Number
      </label>
      </div><div className='boxfields'>
          <label>
            <input
              type="radio"
              value="option3"
              checked={selectedOption === 'option3'}
              onChange={handleOptionChange}
            />
              Use my Yojana Card
      </label>
      </div>
        <p className='box-fl-txt'>This allows you to experience the app in a language of your preference.</p>
        <Link to={selectedOption==='option1'?"/LocationChoose":selectedOption==='option2'?"/LoginPhone":"/YognaCard"}
          ><button className='btn-nxt'>NEXT</button></Link>
    </div>
  </div>
)
}
export default LoginOptions;