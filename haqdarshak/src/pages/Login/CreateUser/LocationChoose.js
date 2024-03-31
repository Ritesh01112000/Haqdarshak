import React from "react";
import "../Language.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const LocationChoose = () => {
  
  const [state,setState] = useState("");
  const [district,setDistrict]= useState("");
  const [pincode,setPincode] = useState("")
  const [isOpenS, setIsOpenS ] = useState(false);
  const [isOpenD,setIsOpenD]= useState(false)
  const [isVisible,setIsVisible]= useState(false);
  
  const onStateSelect = (state)=>{
  
    setState(state);
    setIsOpenS(false);
    setIsVisible(true);
    
  }
  const onDistrictSelect = (state)=>{
    setDistrict(state);
    setIsOpenD(false);
    
  }
  const onPincodeChange =(event)=>{
    console.log(event.target.value,"checking pincode123")
    setPincode(event.target.value)
  }
  return (
    <div>
      <div className="textbox">
        <button className="btn-lng">arrow</button>
        <p>
          Where are you  <br />
          from?
        </p>
      </div>
      <div className="whiteBox">
        <div>
          <button
            className="boxfields dropdown-btn"
            onClick={() => setIsOpenS(!isOpenS)}
          >
            <input className="state-ip-fld" type="text" placeholder="Select State" value={state}/>

            <p> 1</p>
          </button>
          {isOpenS && (
            <div>
              <p onClick={()=>onStateSelect('Maharashtra')} >Maharashtra</p>
              <p onClick={()=>onStateSelect('Madhya Pradesh')} >Madhya Pradesh</p>
              <p onClick={()=>onStateSelect('Punjab')} >Punjab</p>
            </div>
          )}
        </div>

        {isVisible && (
        <div>
        <button
          className="boxfields dropdown-btn"
          onClick={() => setIsOpenD(!isOpenD)}
        >
          <input className="state-ip-fld" type="text" placeholder="Select State" value={district}/>

          <p> 1</p>
        </button>
        {isOpenD && (
          <div>
            <p onClick={()=>onDistrictSelect('Pune')} >Pune</p>
            <p onClick={()=>onDistrictSelect('Mumbai')} >Mumbai</p>
            <p onClick={()=>onDistrictSelect('Nagpur')} >Nagpur</p>
          </div>
        )}
          <div >
        
        <input className='input-fields' placeholder="Enter Pincode" type="text" onChange={onPincodeChange}/>
     </div>
      </div>
      
        )

        }



     {!isVisible&&(

        <div className="dropdown-btn">
          <hr />
          <p>or</p>
          <hr />
        </div>
        )
       }



        <Link to={`/ChoosePhone/${state}/${district}/${pincode}/`}>
          <button className='btn-nxt' >NEXT</button>
        </Link>
      </div>
    </div>
  );
};
export default LocationChoose;
