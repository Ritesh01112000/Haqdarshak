import React, { useState, useEffect } from 'react';
import '../Language.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const OtpScreen = (props) => {
  const { state, district, pincode, phone } = useParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [gender, setGender] = useState('');
  const [resendDisabled, setResendDisabled] = useState(true);
  const [remainingTime, setRemainingTime] = useState(180); // 3 minutes in seconds

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      setResendDisabled(false);
    }
  }, [remainingTime]);

  const onClickHandler = () => {
    // Handle OTP submission logic here
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const onDateChange = (event) => {
    setAge(event.target.value);
  };

  const handleResendOTP = () => {
    // Logic to resend OTP
    setResendDisabled(true);
    setRemainingTime(180); // Reset timer
  };

  return (
    <div>
      <div className="textbox">
        <button className="btn-lng">arrow</button>
        <p>What is the OTP</p>
      </div>
      <div className="whiteBox">
       
        <div className="otp-container">
          <input type="text" className="otp-input" maxLength="1" />
          <input type="text" className="otp-input" maxLength="1" />
          <input type="text" className="otp-input" maxLength="1" />
          <input type="text" className="otp-input" maxLength="1" />
        </div>
        <div className='OTP-1'>
          
          <p className="box-fl-txt">Time remaining: {formatTime(remainingTime)}</p>
          <button className="btn-resend" onClick={handleResendOTP} disabled={resendDisabled}>Resend OTP</button>
        </div>
        <p className="box-fl-txt">We have sent an OTP to your mobile number.</p>
        <button className="btn-nxt" onClick={onClickHandler}>NEXT</button>
      </div>
    </div>
  );
};

export default OtpScreen;
