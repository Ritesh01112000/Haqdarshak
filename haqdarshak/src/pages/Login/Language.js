import React from 'react';
import './Language.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Language = () =>{
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
return(
  <div>
    <div className='textbox'>
      <button className='btn-lng'>arrow</button>
    <p>Which language <br/>do you prefer?</p>
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
              English
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
              English
      </label>
      </div><div className='boxfields'>
          <label>
            <input
              type="radio"
              value="option3"
              checked={selectedOption === 'option3'}
              onChange={handleOptionChange}
            />
              English
      </label>
      </div>
        <p className='box-fl-txt'>This allows you to experience the app in a language of your preference.</p>
        <Link to="/LoginOptions"><button className='btn-nxt'>NEXT</button></Link>
    </div>
  </div>
)
}
export default Language;