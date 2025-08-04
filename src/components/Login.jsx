import React,{useState} from 'react';
const Login=({onLogin})=>{
  const [name,setName]=useState('');

  const handleLogin=()=>{
    if(name.trim()){
      onLogin(name);
    }
  };
  return(
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
};
export default Login;