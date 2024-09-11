import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [SignUp, setSignUp] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple validation (could be more complex)
    try{
        if (name && password) {
            if(SignUp){
                const response = await axios.post("http://localhost:7000/user/login",{name:name, password:password});
                if(response.data.success){
                    localStorage.setItem('authToken', response.data.token);
                    navigate("/dashboard");
                }
            }else{
                const response = await axios.post("http://localhost:7000/user/createUser",{name:name, password:password});
                if(response.data.success){
                    localStorage.setItem('authToken', response.data.token);
                    navigate("/dashboard");
                }
            }
          } else {
            alert('Please fill in both fields.');
          }
    }catch(error){
        if(SignUp){
            alert("SignUp failed please try again");
        }else{
            alert("user alredy exists please try again");
        }
    }
  };
  useEffect(()=>{
    if(localStorage.getItem('authToken')){
      navigate("/dashboard");
      return;
    }
  },[])
  return (
    <div className='container'>
    <div className='loginContainer'>
      {SignUp?<h2>SignUp</h2>:<h2>sign-up</h2>}
      <form onSubmit={handleSubmit}>
        <div className='inputContainer'>
          <label>name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='inputContainer'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">SignUp</button>
      </form>
      
       
      
    </div>
    </div>
  );

}
export default SignUp;