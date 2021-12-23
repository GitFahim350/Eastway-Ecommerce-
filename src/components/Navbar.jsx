import React from 'react'
import styled from 'styled-components'
import logo from './Logo/logo.svg'


import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
const Container=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background-color: #F8F8F8;
`;
const Left=styled.div`
    flex:1;

`;

const Center=styled.div`
    flex:1;

`;

const Right=styled.div`
    flex:1;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
`;
const Search=styled.div`
    width: 300px;
    height: 30px;
    border: 1px solid black;
    display: flex;
    justify-content: right;
    align-items: center;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <Container>
            <Left>
                <img src={logo} alt="" style={{height:'50px'}} />
            </Left>
            <Center>
                
            </Center>
            <Right>
                <Link to='/'>

                    <p style={{cursor:'pointer'}}>Home</p>
                </Link>

                {/* <Link to='/products'>

                    <p style={{cursor:'pointer'}}>Products</p>
                </Link> */}

                <Link to='/register'>

                    <p style={{cursor:'pointer'}}>Register</p>
                </Link>

                <Link to='/login'>

                    <p style={{cursor:'pointer'}}>Login</p>
                </Link>
                
                <Search>   
                    <SearchIcon/>
                </Search>
            </Right>

        </Container>
    )
}

export default Navbar
