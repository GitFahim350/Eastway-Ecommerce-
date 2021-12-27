import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import { login } from '../redux/apiCalls';
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)) ,url('https://lh6.googleusercontent.com/ODD-NCqz20Ah0E9VrJavrAAGPjkHnuadypdwX1E9zSMVNnoTQmeVKHYrMnYUFneNyb17NihDCLthhZGKLqOfrosF389UNmUoB0lil0MlQJ7CwYM-PtpLGj6cZ9EfDf3psNG2tReI');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
`;
const Card = styled.div`
    width: 20vw;
    height: 50vh;
    background-color: #d8d8d8;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Login = () => {
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [user,setUser]=useState({});
    const dispatch=useDispatch();
    const handleClick=(e)=>{
        e.preventDefault();
        setUser({
            "email":email,
            "password":password
        })
        
        login(dispatch,user);
        //login(dispatch,{email,password});
    }
    return (
        <div>
            <Navbar></Navbar>
            <Container>

                <Card>
                    <h1>Login</h1>
                    <br /><br />
                    {/* <input className='w-75' style={{ background: 'none', border: 'none' }} type="text" name='username' placeholder='Enter Username' onChange={(e)=>setUsername(e.target.value)} /><br /> */}
                    <input className='w-75' style={{ background: 'none', border: 'none' }} type="text" name='username' placeholder='Enter Email address' onChange={(e)=>setEmail(e.target.value)} /><br />
                    <input className='w-75' style={{ background: 'none', border: 'none' }} type="password" name='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} /><br />
                    <button style={{ backgroundColor: '#1E7D00', color: 'white' }} onClick={handleClick}>Login</button>

                </Card>
            </Container>
        </div>
    )
}

export default Login
