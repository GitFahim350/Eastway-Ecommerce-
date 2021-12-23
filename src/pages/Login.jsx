import React from 'react'
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

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Container>

                <Card>
                    <h1>Login</h1>
                    <br /><br />
                    <input className='w-75' style={{ background: 'none', border: 'none' }} type="text" name='username' placeholder='Enter Username' /><br />
                    <input className='w-75' style={{ background: 'none', border: 'none' }} type="password" name='password' placeholder='Enter Password' /><br />
                    <button style={{ backgroundColor: '#1E7D00', color: 'white' }}>Login</button>

                </Card>
            </Container>
        </div>
    )
}

export default Login
