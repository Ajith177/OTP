import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [email,setEmail]=useState("");

    const regex_email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const verify_email=regex_email.test(email);

    const navigate=useNavigate()

    const verification =(e)=>{
        e.preventDefault();
        if(email===""){
            alert("Please Fill out  the email field");
        }
        else if(!verify_email){
            alert("Enter the valid email for verification")
        }
        else{
            localStorage.setItem("input",JSON.stringify(email))
            moving()
            
        }
    }
    function moving(){
        navigate('/First',{state:email})
    }


  return (
        <div>
            <h3 className='title'>OTP-Verification</h3>
    <div className='first'>
        <label className='name'>Enter Email address :</label><br/>
        <input type="text" className='email' placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <button className='button-1' onClick={verification}>VERIFY</button>
    </div>
    </div>
  )
}

export default Home;
