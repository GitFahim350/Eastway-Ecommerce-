
import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
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



const Register = () => {
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const handleregister=async()=>{
        try {
            await axios.post("http://localhost:8000/api/user/register",{username,email,password})
            window.location.replace("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <Container>

                <Card>
                    <h1>Register</h1>
                    <br /><br />

                    <input className='w-75' onChange={(e)=>{
                        setUsername(e.target.value)
                    }} style={{ background: 'none', border: 'none' }} type="text" name='username' placeholder='Enter Username' /><br />


                    <input className='w-75' onChange={(e)=>{
                        setEmail(e.target.value)
                    }} style={{ background: 'none', border: 'none' }} type="email" name='email' placeholder='Enter Email' /><br />
                    <input className='w-75'onChange={(e)=>{
                        setPassword(e.target.value)
                    }} style={{ background: 'none', border: 'none' }} type="password" name='password' placeholder='Enter Password' /><br />
                    {/* <input className='w-75' style={{ background: 'none', border: 'none' }} type="password" name='repassword' placeholder='Enter Password again' /><br /> */}
                    <button style={{ backgroundColor: '#1E7D00', color: 'white' }} onClick={()=>{
                        handleregister()
                    }}>Register here</button>

                </Card>
            </Container>
        </div>

    )
}

export default Register
