import React, {useState} from 'react';
import './First.css';
import {useLocation} from 'react-router-dom';

function First() {

    const ajith="9876";

    const [name,setName]=useState({
        box_1:"",
        box_2:"",
        box_3:"",
        box_4:""
    })

    // const inputref=useRef()

    const locate=useLocation();
    const get_value=locate.state;

    const setting=(taking_name,value)=>{
        setName({...name,[taking_name]:value})
    }
    
    const verify=(e)=>{
        e.preventDefault();
        

        if(name.box_1===""&&name.box_2===""&&name.box_3===""&&name.box_4===""){
            alert("Please enter the OTP:")
        }

        else {
           let m=(Object.values(name))
           console.log(m)
           let d=m[0]+m[1]+m[2]+m[3]
           console.log(d)
            if(d===ajith){
                alert("Your OTP is valid");
            }   
            else{
                alert("Your OTP is not valid")
            }         
        }
    }

    // useEffect(()=>{
    //     inputref.current.focus
    // },[name])

  
  return (
    <div className='main'>
        <h3>Verify Your email address</h3><br/>
        <p>A four digit code has been sent to your email <b>"{get_value}"</b></p><br/>
        <p>Please enter the code below to verify your email address.</p><br/>
        <div className='numbers'>
        <input type="text" name="box_1" maxLength="1" placeholder="8" value={name.box_1} onChange={(e)=>setting(e.target.name,e.target.value)} className='box-1' />
        <input type="text" name="box_2" className='box-1'placeholder="8"  value={name.box_2} onChange={(e)=>setting(e.target.name,e.target.value)}  maxLength={1}/>
        <input type="text" name="box_3" className='box-1' placeholder="8" value={name.box_3} onChange={(e)=>setting(e.target.name,e.target.value)}  maxLength={1}/>
        <input type="text" name="box_4" className='box-1' placeholder="8" value={name.box_4}  onChange={(e)=>setting(e.target.name,e.target.value)} maxLength={1}/>
        </div>
        <br/>
        <button className='submit' onClick={verify}>Verify OTP</button>
    </div>
  )
}

export default First
